import json
from fastapi import APIRouter, HTTPException
from app.schemas.project import ProjectSearchRequest
from app.ai.prompts import project_search_prompt
from app.ai.ai_router import call_ai


router = APIRouter()

@router.post("/search")
def search_projects(payload: ProjectSearchRequest):
    prompt = project_search_prompt(
        payload.components,
        payload.student_level
    )

    try:
        text = call_ai(prompt)

        print("RAW GEMINI OUTPUT:\n", text)

        cleaned = (
            text.strip()
            .replace("```json", "")
            .replace("```", "")
        )

        return json.loads(cleaned)

    except Exception as e:
        # 🔥 IMPORTANT: expose the real error
        raise HTTPException(
            status_code=500,
            detail=f"Gemini generation failed: {str(e)}"
        )
