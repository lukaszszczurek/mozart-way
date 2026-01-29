#!/usr/bin/env python3
"""List available Gemini models."""

import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

from google import genai

api_key = os.environ.get("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

print("Available models:")
print("=" * 60)

for model in client.models.list():
    name = model.name
    if 'image' in name.lower() or 'imagen' in name.lower():
        print(f"[IMAGE] {name}")
    elif 'gemini' in name.lower():
        print(f"        {name}")
