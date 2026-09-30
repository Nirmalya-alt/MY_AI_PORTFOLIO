from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import json
import os

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

portfolio_path = BASE_DIR / "portfolio.json"
if portfolio_path.exists():
    with open(portfolio_path, "r", encoding="utf-8") as file:
        portfolio_data = json.load(file)
else:
    portfolio_data = {}

gemini_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=gemini_key) if gemini_key else None

# ── Routes ──────────────────────────────────────────────
@app.get("/")
def home():
    return {"message": "Portfolio AI Backend is running!"}


@app.get("/portfolio")
def get_portfolio():
    return portfolio_data


@app.post("/chat")
def chat(question: str):
    if not client:
        raise HTTPException(status_code=500, detail="Gemini API key is not configured on the server.")

    prompt = f"""
You are Nirmalya Chatterjee's personal portfolio AI assistant.

Your job is to answer questions about Nirmalya using ONLY the portfolio data provided below.

IMPORTANT RULES:

1. Use ONLY the information available in the portfolio data.
2. Never invent or assume information.
3. If the answer is not available in the portfolio data, say:
   "I don't have that information in Nirmalya's portfolio."
4. Keep answers short, clear and friendly.
5. If the user asks about skills, projects, education, experience or certificates,
   answer directly from the portfolio data.
6. Do not claim that Nirmalya has experience with a technology unless it exists
   in the portfolio data.

PORTFOLIO DATA:
{json.dumps(portfolio_data, indent=2)}

USER QUESTION:
{question}

ANSWER:
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return {"answer": response.text}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", "8000")),
        reload=os.getenv("RELOAD", "false").lower() == "true",
    )
