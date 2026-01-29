#!/usr/bin/env python3
"""
Generate all icons for mozart_way website using Gemini API.
All icons will have transparent backgrounds using gemini-2.5-flash-image model.
"""

import os
import time
from pathlib import Path

try:
    from google import genai
    from google.genai import types
    from PIL import Image
    from dotenv import load_dotenv
except ImportError:
    print("Installing dependencies...")
    os.system("pip install google-genai Pillow python-dotenv")
    from google import genai
    from google.genai import types
    from PIL import Image
    from dotenv import load_dotenv

# Load .env file from project root
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("ERROR: Set GEMINI_API_KEY environment variable")
    print("Windows: set GEMINI_API_KEY=your_key_here")
    exit(1)

client = genai.Client(api_key=api_key)
IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"

# Define all icons to generate with their prompts
# Each prompt ends with explicit transparent background requirement
ICONS = {
    "icon-conductor.png": """
        A flat design icon of a conductor's baton with tech elements.
        Features: A conductor's baton (thin stick) in diagonal position with purple/violet curved lines around it suggesting motion and music waves.
        Small tech elements nearby: code brackets </>, small gear, cloud icon.
        Colors: Purple gradient (#7c3aed to #a855f7), blue accents (#3b82f6).
        Style: Clean vector look, flat design, bold outlines, simple shapes.
        The background must be transparent.
    """,

    "icon-rocket.png": """
        A flat design sticker of a stylized rocket ship flying diagonally upward with small decorative stars around it.
        Features: Geometric rocket with flames, scattered star shapes.
        Colors: Purple/violet (#7c3aed, #a855f7), blue (#3b82f6) for flames.
        Style: Clean vector, flat design, bold outlines, playful but professional.
        The background must be transparent.
    """,

    "icon-target.png": """
        A flat design icon of a circular target/bullseye with an arrow hitting the center.
        Features: Concentric rings forming bullseye, arrow in center.
        Colors: Purple/violet rings (#7c3aed, #a855f7, #c4b5fd), blue arrow (#3b82f6).
        Style: Clean vector, flat design, geometric shapes.
        The background must be transparent.
    """,

    "icon-creative.png": """
        A flat design icon of a lightbulb outline with a music note inside.
        Features: Simple lightbulb shape outline, music note symbol inside the bulb.
        Colors: Purple/violet (#7c3aed) for bulb outline, blue (#3b82f6) for note.
        Style: Clean lines, flat design, minimal details.
        The background must be transparent.
    """,

    "icon-gears.png": """
        A flat design icon of two or three interlocking gear/cog wheels.
        Features: Interconnected gears in different sizes.
        Colors: Purple/violet gradient (#7c3aed to #a855f7), blue accents.
        Style: Clean vector, flat design, geometric shapes.
        The background must be transparent.
    """,

    "icon-growth.png": """
        A flat design icon of a growth chart with upward arrow.
        Features: Simple bar chart or line graph showing upward trend, arrow pointing up.
        Colors: Purple/violet (#7c3aed, #a855f7), green accent (#22c55e) for growth.
        Style: Clean vector, flat design, geometric shapes.
        The background must be transparent.
    """,

    "logo-mozart.png": """
        A modern logo combining Mozart silhouette with tech elements.
        Features: Stylized side profile silhouette of Mozart with 18th century baroque wig, Mozart holding a cursor arrow or mouse pointer. Text "mozart_way" below (mozart in dark navy, _way in purple).
        Colors: Purple/violet (#7c3aed), dark blue/navy for silhouette.
        Style: Modern flat design, elegant, tech company logo.
        The background must be transparent.
    """,

    "mozart-artistic.png": """
        An artistic low-poly geometric portrait of Mozart.
        Features: Low polygon/geometric style portrait of Mozart, side profile or 3/4 view showing his iconic baroque wig. Made of triangular facets.
        Colors: Purple/violet gradient (#7c3aed to #a855f7), blue tones.
        Style: Modern geometric art, triangular facets creating portrait.
        The background must be transparent.
    """,

    "decor-notes.png": """
        Decorative scattered musical notes pattern.
        Features: Scattered musical notes (quarter notes, eighth notes, treble clef), light airy arrangement.
        Colors: Light purple/violet (#c4b5fd, #ddd6fe), semi-transparent appearance.
        Style: Flat design, decorative, elegant.
        The background must be transparent.
    """,

    "decor-piano.png": """
        Abstract decorative piano keys pattern.
        Features: Artistic abstract representation of piano keys.
        Colors: Purple/violet (#7c3aed), white keys, dark accents.
        Style: Flat design, geometric, decorative, modern.
        The background must be transparent.
    """,

    "logo-icon.png": """
        A minimalist icon of Mozart's side profile silhouette.
        Features: Simple side profile of Mozart with his iconic 18th century baroque wig. Pure flat design, single solid color, very simple, must be recognizable at small sizes (24x24px). Like a cameo/stamp style.
        Colors: Solid purple/violet (#7c3aed).
        Style: Minimalist, clean edges, no details, just silhouette shape.
        The background must be transparent.
    """,
}


def generate_icon(filename, prompt, max_size=512):
    """Generate a single icon using Gemini API with transparent background."""
    print(f"\nGenerating: {filename}")
    print("-" * 40)

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
            ),
        )

        for part in response.parts:
            if part.inline_data is not None:
                filepath = IMAGES_DIR / filename
                temp_path = filepath.with_suffix('.tmp.png')

                # Save raw image first
                raw_image = part.as_image()
                raw_image.save(str(temp_path))

                # Open with PIL for processing
                with Image.open(temp_path) as img:
                    # Resize if needed
                    if img.width > max_size or img.height > max_size:
                        ratio = min(max_size / img.width, max_size / img.height)
                        new_size = (int(img.width * ratio), int(img.height * ratio))
                        img = img.resize(new_size, Image.Resampling.LANCZOS)

                    # Ensure RGBA mode
                    if img.mode != 'RGBA':
                        img = img.convert('RGBA')

                    img.save(filepath, 'PNG', optimize=True)

                # Clean up temp file
                temp_path.unlink(missing_ok=True)

                size_kb = filepath.stat().st_size / 1024
                print(f"[OK] Saved: {filename} ({size_kb:.1f}KB)")
                return True

    except Exception as e:
        print(f"[ERR] Failed: {e}")
        return False

    return False


def main():
    """Generate all icons."""
    print("=" * 50)
    print("Mozart Way - Icon Generator (Transparent BG)")
    print("=" * 50)
    print(f"Model: gemini-2.5-flash-image")
    print(f"Output: {IMAGES_DIR}")
    print(f"Icons: {len(ICONS)}")

    success = 0
    failed = 0

    for filename, prompt in ICONS.items():
        if generate_icon(filename, prompt):
            success += 1
        else:
            failed += 1

        # Rate limiting
        time.sleep(3)

    print("\n" + "=" * 50)
    print(f"Done! Success: {success}, Failed: {failed}")
    print("=" * 50)


if __name__ == "__main__":
    main()
