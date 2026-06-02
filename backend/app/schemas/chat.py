#tutor chat feature

from pydantic import BaseModel
from typing import List


class ProjectContext(BaseModel):
    project_id: str
    title: str
    difficulty: str
    components: List[str]


class TutorChatRequest(BaseModel):
    project_context: ProjectContext
    student_message: str


class TutorChatResponse(BaseModel):
    reply: str
