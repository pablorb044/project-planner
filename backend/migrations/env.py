import app.models
from logging.config import fileConfig

from alembic import context
from sqlalchemy import pool

from app.database import Base, engine

# Obtener la configuración de Alembic.
config = context.config

# Configurar el sistema de logging.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Registrar los metadatos de nuestros modelos.
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Ejecutar migraciones sin establecer una conexión directa."""

    context.configure(
        url=engine.url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Ejecutar migraciones utilizando una conexión activa."""

    with engine.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
