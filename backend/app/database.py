
import os
from collections.abc import Generator
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import URL, create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

# Cargar las variables del .env situado en la raíz del proyecto.
env_path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(env_path)

# Obtener las credenciales de PostgreSQL.
database_url = URL.create(
    drivername="postgresql+psycopg",
    username=os.environ["POSTGRES_USER"],
    password=os.environ["POSTGRES_PASSWORD"],
    host="localhost",
    port=5433,
    database=os.environ["POSTGRES_DB"],
)


# Crear la clase base de los modelos.
class Base(DeclarativeBase):
    pass


# Crear el motor de conexión.
engine = create_engine(
    database_url,
    pool_pre_ping=True,
)


# Crear la fábrica de sesiones.
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False,
)


# Proporcionar una sesión por petición.
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
