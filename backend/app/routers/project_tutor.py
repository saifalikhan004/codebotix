# routers/project_tutor.py

from fastapi import APIRouter, HTTPException
import json
import re

from app.schemas.project import (
    ProjectDetailsRequest,
    ProjectDetailsResponse
)
from app.ai.prompts import project_details_prompt
from app.ai.ai_router import call_ai


router = APIRouter()



# --------------------------------------------------
# LOAD COMPONENT KNOWLEDGE (ONCE)
# --------------------------------------------------

try:
    with open("knowledge/component.json", "r") as f:
        COMPONENT_KNOWLEDGE = json.load(f)
except Exception:
    COMPONENT_KNOWLEDGE = {}



# --------------------------------------------------
# HELPER: SAFE JSON EXTRACTION
# --------------------------------------------------

def extract_json(text: str):
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        raise ValueError("No JSON object found in AI response")
    return json.loads(match.group())


# --------------------------------------------------
# PROJECT DETAILS ENDPOINT
# --------------------------------------------------

@router.post("/details", response_model=ProjectDetailsResponse)
def get_project_details(request: ProjectDetailsRequest):
    try:
        prompt = project_details_prompt(
            project_id=request.project_id,
            title=request.title,
            difficulty=request.difficulty,
            selected_components=request.selected_components,
            component_knowledge=COMPONENT_KNOWLEDGE
        )

        raw_output = call_ai(prompt)
        print("AI RAW OUTPUT (DETAILS):", raw_output)

        data = extract_json(raw_output)
        return data

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Project details generation failed: {str(e)}"
        )
from app.schemas.chat import (
    TutorChatRequest,
    TutorChatResponse
)
from app.ai.prompts import project_tutor_prompt


# --------------------------------------------------
# PROJECT AI TUTOR ENDPOINT
# --------------------------------------------------

@router.post("/tutor", response_model=TutorChatResponse)
def project_tutor_chat(request: TutorChatRequest):
    try:
        prompt = project_tutor_prompt(
            project_context=request.project_context.dict(),
            student_message=request.student_message,
            component_knowledge=COMPONENT_KNOWLEDGE
        )

        reply = call_ai(prompt)
        return {"reply": reply.strip()}

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Project tutor failed: {str(e)}"
        )
