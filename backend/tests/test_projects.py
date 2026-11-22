
from uuid import UUID

from sqlalchemy import select

from app.models import Project, ProjectSection


def test_create_project(client, db_session):
    response = client.post("/projects")

    assert response.status_code == 201

    data = response.json()

    # Comprobar los datos devueltos.
    assert UUID(data["project_id"])
    assert len(data["access_key"]) == 43

    # Comprobar que el proyecto se ha guardado.
    project = db_session.scalar(
        select(Project).where(
            Project.id == UUID(data["project_id"])
        )
    )

    assert project is not None

    # Comprobar que se han creado las cinco secciones.
    sections = db_session.scalars(
        select(ProjectSection).where(
            ProjectSection.project_id == project.id
        )
    ).all()

    assert len(sections) == 5


def test_access_project_with_valid_key(client):
    # Crear un proyecto para obtener una clave válida.
    creation_response = client.post("/projects")
    access_key = creation_response.json()["access_key"]
    expected_project_id = creation_response.json()["project_id"]

    # Recuperar el proyecto mediante su clave.
    response = client.post(
        "/projects/access",
        json={"access_key": access_key},
    )

    assert response.status_code == 200
    assert response.json()["project_id"] == expected_project_id


def test_access_project_with_invalid_key(client):
    response = client.post(
        "/projects/access",
        json={"access_key": "A" * 43},
    )

    assert response.status_code == 401
    assert response.json()["detail"] == "Clave de acceso no válida"

def test_get_current_project_with_valid_key(client):
    creation_response = client.post("/projects")
    access_key = creation_response.json()["access_key"]
    expected_project_id = creation_response.json()["project_id"]

    response = client.get(
        "/projects/me",
        headers={"Authorization": f"Bearer {access_key}"},
    )

    assert response.status_code == 200
    assert response.json()["project_id"] == expected_project_id


def test_get_current_project_without_authentication(client):
    response = client.get("/projects/me")

    assert response.status_code == 401


def test_get_current_project_with_invalid_key(client):
    response = client.get(
        "/projects/me",
        headers={"Authorization": f"Bearer {'A' * 43}"},
    )

    assert response.status_code == 401


def test_delete_project(client, db_session):
    creation_response = client.post("/projects")
    access_key = creation_response.json()["access_key"]

    response = client.delete(
        "/projects/me",
        headers={"Authorization": f"Bearer {access_key}"},
    )

    assert response.status_code == 204

    # Comprobar que el proyecto ya no existe.
    project = db_session.scalar(select(Project))

    assert project is None


def test_delete_project_cascades_sections(client, db_session):
    creation_response = client.post("/projects")
    access_key = creation_response.json()["access_key"]

    # Comprobar que inicialmente existen las cinco secciones.
    sections_before = db_session.scalars(
        select(ProjectSection)
    ).all()

    assert len(sections_before) == 5

    response = client.delete(
        "/projects/me",
        headers={"Authorization": f"Bearer {access_key}"},
    )

    assert response.status_code == 204

    # Comprobar que también se han eliminado las secciones.
    sections_after = db_session.scalars(
        select(ProjectSection)
    ).all()

    assert len(sections_after) == 0

def test_access_project_rate_limit(client):
    responses = []

    for _ in range(6):
        response = client.post(
            "/projects/access",
            json={"access_key": "A" * 43},
        )

        responses.append(response.status_code)

    assert responses == [401, 401, 401, 401, 401, 429]


def test_access_project_with_short_key(client):
    response = client.post(
        "/projects/access",
        json={"access_key": "A" * 42},
    )

    assert response.status_code == 422


def test_access_project_with_long_key(client):
    response = client.post(
        "/projects/access",
        json={"access_key": "A" * 44},
    )

    assert response.status_code == 422


def test_access_project_with_invalid_characters(client):
    response = client.post(
        "/projects/access",
        json={"access_key": "!" * 43},
    )

    assert response.status_code == 422


def test_access_project_with_empty_key(client):
    response = client.post(
        "/projects/access",
        json={"access_key": ""},
    )

    assert response.status_code == 422

def test_get_current_project_rate_limit(client):
    creation_response = client.post("/projects")
    access_key = creation_response.json()["access_key"]

    responses = []

    for _ in range(6):
        response = client.get(
            "/projects/me",
            headers={"Authorization": f"Bearer {access_key}"},
        )

        responses.append(response.status_code)

    assert responses == [200, 200, 200, 200, 200, 429]

def test_delete_project_rate_limit(client):
    access_keys = []

    # Crear seis proyectos independientes.
    for _ in range(6):
        response = client.post("/projects")
        access_keys.append(response.json()["access_key"])

    responses = []

    # Intentar eliminar los seis proyectos.
    for access_key in access_keys:
        response = client.delete(
            "/projects/me",
            headers={"Authorization": f"Bearer {access_key}"},
        )

        responses.append(response.status_code)

    assert responses == [204, 204, 204, 204, 204, 429]