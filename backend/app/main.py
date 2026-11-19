from fastapi import Depends, FastAPI, HTTPException, Response, status
from sqlalchemy import select, text
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_project
from app.models import Project, ProjectSection
from app.schemas import (
    ProjectAccessRequest,
    ProjectAccessResponse,
    ProjectCreateResponse,
)
from app.security import generate_project_key, hash_project_key

app = FastAPI(title="PROJECT PLANNER API")



@app.get("/")
async def root():
    return {"message": "PROJECT PLANNER API is running"}


@app.get("/db-check")
def db_check(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1")).scalar_one()

    return {"database": "connected", "result": result}


@app.post("/projects", response_model=ProjectCreateResponse, status_code=201)
def create_project(db: Session = Depends(get_db)):
    # Generar la clave privada y calcular su hash.
    access_key = generate_project_key()
    key_hash = hash_project_key(access_key)

    # Definir las cinco secciones iniciales.
    section_types = [
        "definition",
        "feasibility",
        "technical_design",
        "scope",
        "roadmap",
    ]

    # Preparar el proyecto y sus secciones.
    project = Project(key_hash=key_hash)

    project.sections = [
        ProjectSection(section_type=section_type)
        for section_type in section_types
    ]

    # Guardar todo dentro de una única transacción.
    with db.begin():
        db.add(project)

    # Devolver la clave original una sola vez.
    return ProjectCreateResponse(
        project_id=project.id,
        access_key=access_key,
    )


@app.post("/projects/access", response_model=ProjectAccessResponse)
def access_project(
    request: ProjectAccessRequest,
    db: Session = Depends(get_db),
):
    # Calcular el hash de la clave recibida.
    key_hash = hash_project_key(request.access_key)

    # Buscar el proyecto asociado a ese hash.
    project = db.scalar(
        select(Project).where(Project.key_hash == key_hash)
    )

    # Rechazar claves incorrectas.
    if project is None:
        raise HTTPException(
            status_code=401,
            detail="Clave de acceso no válida",
        )

    return ProjectAccessResponse(project_id=project.id)

@app.get("/projects/me", response_model=ProjectAccessResponse)
def get_my_project(
    project: Project = Depends(get_current_project),
):
    return ProjectAccessResponse(project_id=project.id)


@app.delete("/projects/me", status_code=status.HTTP_204_NO_CONTENT)
def delete_my_project(
    project: Project = Depends(get_current_project),
    db: Session = Depends(get_db),
):
    try:
        db.delete(project)
        db.commit()
    except Exception:
        db.rollback()
        raise

    return Response(status_code=status.HTTP_204_NO_CONTENT)
