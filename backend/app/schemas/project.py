"""
project.py
----------
Pydantic models for project search and project workspace.
"""

from pydantic import BaseModel
from typing import List


#project searching feature

class ProjectSearchRequest(BaseModel):
    components: List[str]
    student_level: str = "beginner"


class Project(BaseModel):
    project_id: str
    title: str
    short_desc: str
    difficulty: str


#project workspace feature

class ProjectDetailsRequest(BaseModel):
    project_id: str
    title: str
    difficulty: str
    selected_components: List[str]


class ProjectDetailsResponse(BaseModel):
    overview: str
    how_it_works: str
    main_components: List[str]
    additional_components: List[str]
    learning_outcomes: List[str]
