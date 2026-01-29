#!/usr/bin/env python3
"""
Generate Mozart-themed minimalist graphics for mozart_way website.
Style: Flat design, violet/purple color scheme, artistic/musical motifs.
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
    exit(1)

client = genai.Client(api_key=api_key)
IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"

def generate_image(prompt: str, filename: str, aspect_ratio: str = "1:1", max_width: int = 800):
    """Generate and save an optimized image."""
    print(f"Generating: {filename}...")

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[prompt],
            config=types.GenerateContentConfig(
                response_modalities=['IMAGE'],
                image_config=types.ImageConfig(
                    aspect_ratio=aspect_ratio,
                ),
            ),
        )

        for part in response.parts:
            if part.inline_data:
                filepath = IMAGES_DIR / filename
                temp_path = filepath.with_suffix('.tmp.jpg')

                raw_img = part.as_image()
                raw_img.save(str(temp_path))

                with Image.open(temp_path) as img:
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

                    if img.mode == 'RGBA' and not filename.endswith('.png'):
                        img = img.convert('RGB')

                    if filename.endswith('.png'):
                        img.save(filepath, 'PNG', optimize=True)
                    else:
                        img.save(filepath, 'JPEG', quality=85, optimize=True)

                temp_path.unlink(missing_ok=True)
                size_kb = filepath.stat().st_size / 1024
                print(f"  [OK] Saved: {filename} ({size_kb:.0f}KB)")
                return True

    except Exception as e:
        print(f"  [ERR] {filename}: {e}")
        return False

def main():
    print("Generating Mozart-themed graphics...\n")

    # Color scheme reference for prompts - TRANSPARENT backgrounds
    colors = "violet (#7c3aed), purple (#8b5cf6), deep blue (#3b82f6)"
    transparent = "TRANSPARENT background, NO background, PNG with alpha channel"

    # 1. LOGO - Mozart silhouette + modern typography
    generate_image(
        prompt=f"""Create a minimalist modern logo for 'mozart_way' web design agency.
        Design: Stylized Mozart silhouette profile (iconic wig shape) combined with modern geometric elements.
        Style: Flat design, clean vector look, no gradients, minimal.
        Colors: {colors}. Mozart silhouette in violet.
        Typography: 'mozart_way' in modern sans-serif, lowercase, clean.
        {transparent}. Professional, artistic, elegant. NO realistic details.""",
        filename="logo-mozart.png",
        aspect_ratio="3:2",
        max_width=400
    )

    # 2. Services icon - Rocket/Launch (like reference)
    generate_image(
        prompt=f"""Create a flat design icon illustration of a rocket launching with stars.
        Style: Modern flat design, like app icons, clean geometric shapes.
        Colors: {colors}. Rocket in violet/purple, stars in lighter shades.
        {transparent}. Minimal, professional, suitable for web services.
        NO realistic textures, pure flat vector style.""",
        filename="icon-rocket.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 3. Services icon - Target/Goal
    generate_image(
        prompt=f"""Create a flat design icon illustration of a target with arrow hitting bullseye.
        Style: Modern flat design, clean geometric shapes.
        Colors: {colors}. Target rings in violet/purple shades, arrow in deep blue.
        {transparent}. Minimal, professional.
        NO realistic textures, pure flat vector style.""",
        filename="icon-target.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 4. Services icon - Growth/Chart
    generate_image(
        prompt=f"""Create a flat design icon illustration of a growth chart with upward arrow.
        Style: Modern flat design, clean geometric shapes.
        Colors: {colors}. Chart bars in violet gradient, arrow in deep blue.
        {transparent}. Minimal, professional.
        NO realistic textures, pure flat vector style.""",
        filename="icon-growth.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 5. Services icon - Creative/Lightbulb with musical note
    generate_image(
        prompt=f"""Create a flat design icon illustration of a lightbulb with a musical note inside.
        Style: Modern flat design, clean geometric shapes.
        Colors: {colors}. Lightbulb in violet, musical note in purple.
        {transparent}. Represents creativity and artistry.
        NO realistic textures, pure flat vector style.""",
        filename="icon-creative.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 6. Mozart artistic portrait - modern interpretation
    generate_image(
        prompt=f"""Create a modern artistic interpretation of Mozart for a web agency.
        Style: Geometric low-poly or abstract portrait, NOT realistic.
        Design: Mozart's iconic silhouette (wig profile) made of geometric shapes.
        Colors: {colors}. Violet and purple geometric fragments.
        {transparent}. Modern, artistic, suitable for tech/creative company.
        Minimal, elegant, contemporary art style.""",
        filename="mozart-artistic.png",
        aspect_ratio="1:1",
        max_width=600
    )

    # 7. Process icon - conductor baton
    generate_image(
        prompt=f"""Create a flat design icon of a conductor's baton with motion lines.
        Style: Modern flat design, minimal, clean.
        Colors: {colors}. Baton in violet, motion lines in lighter purple.
        {transparent}. Represents 'orchestrating' web projects.
        Professional, elegant, minimal.""",
        filename="icon-conductor.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 8. Musical notes decoration
    generate_image(
        prompt=f"""Create floating musical notes and treble clef as decorative element.
        Style: Modern flat design, elegant, flowing arrangement.
        Colors: {colors}. Notes in violet and purple shades.
        {transparent}. Decorative, artistic, suitable for web design agency.
        Minimal, sophisticated.""",
        filename="decor-notes.png",
        aspect_ratio="16:9",
        max_width=800
    )

    # 9. Piano keys abstract
    generate_image(
        prompt=f"""Create abstract piano keys as decorative graphic element.
        Style: Modern flat design, geometric, stylized.
        Colors: Black and white keys with violet accent highlights.
        {transparent}. Artistic interpretation, not realistic.
        Minimal, elegant, suitable for web design.""",
        filename="decor-piano.png",
        aspect_ratio="3:2",
        max_width=600
    )

    # 10. Gear/Settings icon for process
    generate_image(
        prompt=f"""Create a flat design icon of interlocking gears with a checkmark.
        Style: Modern flat design, clean geometric shapes.
        Colors: {colors}. Gears in violet shades, checkmark in green.
        {transparent}. Represents process/settings.
        NO realistic textures, pure flat vector style.""",
        filename="icon-gears.png",
        aspect_ratio="1:1",
        max_width=400
    )

    print("\n[DONE] All Mozart graphics generated!")

if __name__ == "__main__":
    main()
