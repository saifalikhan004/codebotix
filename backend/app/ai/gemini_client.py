"""
gemini_client.py
-----------------
Official Gemini client using the google.genai SDK.
Configured to use Gemini 2.5 by default.
"""

import os
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise RuntimeError("GEMINI_API_KEY is not set in environment.")

# Create Gemini client
client = genai.Client(api_key=api_key)

# Default to Gemini 2.5 (configurable via GEMINI_MODEL)
MODEL_NAME = os.getenv("GEMINI_MODEL", "models/gemini-2.5-flash")


def call_gemini(prompt: str) -> str:
    """
    Sends a prompt to Gemini and returns text output.
    """
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt
    )

    return response.text
