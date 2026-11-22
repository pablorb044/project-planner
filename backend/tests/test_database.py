from sqlalchemy import inspect, text
from sqlalchemy.engine import Engine


def test_database_connection(test_engine: Engine):
    # Comprobar que estamos conectados a la base de testing.
    with test_engine.connect() as connection:
        database_name = connection.execute(
            text("SELECT current_database()")
        ).scalar_one()

    assert database_name == "project_planner_test"


def test_database_tables(test_engine: Engine):
    # Obtener los nombres de las tablas existentes.
    inspector = inspect(test_engine)
    table_names = inspector.get_table_names()

    expected_tables = {
        "projects",
        "project_sections",
        "project_decisions",
        "messages",
        "context_summaries",
        "change_proposals",
    }

    assert expected_tables.issubset(set(table_names))