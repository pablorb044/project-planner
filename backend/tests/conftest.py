import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session

from app.database import Base, database_url, get_db
from app.main import app, limiter

@pytest.fixture(autouse=True)
def reset_rate_limiter():
    limiter.reset()

    yield

    limiter.reset()


TEST_DATABASE_NAME = "project_planner_test"


@pytest.fixture(scope="session")
def test_engine():
    # Crear una URL independiente para la base de testing.
    test_database_url = database_url.set(
        database=TEST_DATABASE_NAME
    )

    # Comprobar que la configuración apunta a la base correcta.
    if test_database_url.database != TEST_DATABASE_NAME:
        raise RuntimeError("Configuración de base de datos de tests incorrecta")

    engine = create_engine(
        test_database_url,
        pool_pre_ping=True,
    )

    try:
        # Verificar la base de datos real antes de modificar nada.
        with engine.connect() as connection:
            current_database = connection.execute(
                text("SELECT current_database()")
            ).scalar_one()

        if current_database != TEST_DATABASE_NAME:
            raise RuntimeError(
                f"Base de datos incorrecta: {current_database}"
            )

        # Crear las tablas exclusivamente en la base de testing.
        Base.metadata.create_all(bind=engine)

        yield engine

    finally:
        # Eliminar las tablas de testing al terminar la sesión de tests.
        if engine:
            Base.metadata.drop_all(bind=engine)
            engine.dispose()


@pytest.fixture
def db_session(test_engine):
    # Abrir una conexión y una transacción para cada prueba.
    connection = test_engine.connect()
    transaction = connection.begin()

    session = Session(
        bind=connection,
        autoflush=False,
        expire_on_commit=False,
        join_transaction_mode="create_savepoint",
    )

    try:
        yield session
    finally:
        session.close()
        transaction.rollback()
        connection.close()


@pytest.fixture
def client(db_session):
    # Sustituir get_db para que FastAPI utilice la sesión de testing.
    def override_get_db():
        yield db_session

    app.dependency_overrides[get_db] = override_get_db

    try:
        with TestClient(app) as test_client:
            yield test_client
    finally:
        app.dependency_overrides.pop(get_db, None)