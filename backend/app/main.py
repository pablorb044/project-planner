
from fastapi import Depends, FastAPI
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.database import get_db

app = FastAPI(title="PROJECT PLANNER API")


@app.get("/")
async def root():
    return {"message": "PROJECT PLANNER API is running"}


@app.get("/db-check")
def db_check(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1")).scalar_one()

    return {"database": "connected", "result": result}
