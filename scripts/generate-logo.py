#!/usr/bin/env python3
"""
Generate Mozart silhouette logo for mozart_way website.
Style: Flat design, violet color scheme, transparent background.
"""

import os
from pathlib import Path

try:
    from google import genai
    from google.genai import types
    from PIL import Image
except ImportError:
    print("Installing dependencies...")
    os.system("pip install google-genai Pillow")
    from google import genai
    from google.genai import types
    from PIL import Image

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("ERROR: Set GEMINI_API_KEY environment variable")
    print("Windows: set GEMINI_API_KEY=your_key_here")
    exit(1)

client = genai.Client(api_key=api_key)
IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"

def generate_logo():
    """Generate Mozart silhouette logo with transparent background."""
    print("Generating Mozart silhouette logo...\n")

    prompt = """Create a minimalist icon of Mozart's profile silhouette.
    Design requirements:
    - Side profile view of Mozart with his iconic 18th century wig (baroque style)
    - Pure flat design, single solid color, NO gradients
    - Color: Violet/purple (#7c3aed) or white silhouette
    - TRANSPARENT background - PNG with alpha channel, NO background at all
    - Clean vector-like edges, minimal details
    - Iconic recognizable shape suitable for small icon (24x24px display)
    - Style: Like a cameo silhouette or profile stamp
    - NO text, NO additional elements, just the silhouette
    - Professional, elegant, suitable for tech company logo"""

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=['IMAGE'],
                image_config=types.ImageConfig(
                    aspect_ratio="1:1",
                ),
            ),
        )

        for part in response.parts:
            if part.inline_data:
                filepath = IMAGES_DIR / "logo-icon.png"
                temp_path = filepath.with_suffix('.tmp.png')

                raw_img = part.as_image()
                raw_img.save(str(temp_path))

                with Image.open(temp_path) as img:
                    # Resize to reasonable icon size
                    max_width = 200
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

                    # Keep RGBA for transparency
                    if img.mode != 'RGBA':
                        img = img.convert('RGBA')

                    img.save(filepath, 'PNG', optimize=True)

                temp_path.unlink(missing_ok=True)
                size_kb = filepath.stat().st_size / 1024
                print(f"[OK] Saved: logo-icon.png ({size_kb:.0f}KB)")
                print(f"     Path: {filepath}")
                return True

    except Exception as e:
        print(f"[ERR] Failed to generate logo: {e}")
        return False

if __name__ == "__main__":
    generate_logo()
