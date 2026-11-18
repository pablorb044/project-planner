
from fastapi import FastAPI

app = FastAPI(title="PROJECT PLANNER API")


@app.get("/")
async def root():
    return {"message": "PROJECT PLANNER API is running"}
