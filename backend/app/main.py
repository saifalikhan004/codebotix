from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.project_search import router as project_search_router
from app.routers.project_tutor import router as project_tutor_router

app = FastAPI(title="Codebotix AI Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    project_search_router,
    prefix="/api/projects",
    tags=["Project Search"]
)

app.include_router(
    project_tutor_router,
    prefix="/api/projects",
    tags=["Project Tutor"]
)

@app.get("/")
def health_check():
    return {"status": "Backend running"}
