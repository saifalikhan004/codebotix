import os
from dotenv import load_dotenv
from google import genai
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

models = genai.list_models()

print("\nAVAILABLE MODELS FOR THIS API KEY:\n")

for m in models:
    print(f"- {m.name} | supports generateContent: {'generateContent' in m.supported_generation_methods}")
