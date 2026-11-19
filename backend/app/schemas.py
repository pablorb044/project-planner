
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class ProjectCreateResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    project_id: UUID
    access_key: str


class ProjectAccessRequest(BaseModel):
    access_key: str = Field(
        min_length=43,
        max_length=43,
        pattern=r"^[A-Za-z0-9_-]{43}$",
    )


class ProjectAccessResponse(BaseModel):
    project_id: UUID
