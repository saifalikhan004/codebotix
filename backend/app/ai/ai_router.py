"""
ai_router.py
------------
Single entry point for AI calls.
If we change models or providers later, we change it here.
"""

from app.ai.openrouter_client import call_openrouter


def call_ai(prompt: str) -> str:
    """
    Calls the AI provider with the given prompt.
    """
    return call_openrouter(prompt)
