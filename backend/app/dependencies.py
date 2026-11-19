
from typing import Annotated

from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Project
from app.security import hash_project_key


bearer_scheme = HTTPBearer(auto_error=False)


def get_current_project(
    credentials: Annotated[
        HTTPAuthorizationCredentials | None,
        Security(bearer_scheme),
    ],
    db: Session = Depends(get_db),
) -> Project:
    # Comprobar que se ha proporcionado una credencial Bearer.
    if credentials is None:
        raise HTTPException(
            status_code=401,
            detail="Autenticación requerida",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Calcular el hash de la clave recibida.
    key_hash = hash_project_key(credentials.credentials)

    # Buscar el proyecto asociado a esa clave.
    project = db.scalar(
        select(Project).where(Project.key_hash == key_hash)
    )

    # Rechazar claves que no correspondan a ningún proyecto.
    if project is None:
        raise HTTPException(
            status_code=401,
            detail="Credenciales no válidas",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return project
