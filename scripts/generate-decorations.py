#!/usr/bin/env python3
"""
Generate logo and decorative elements using Gemini API.
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

# Initialize client
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
                # Save raw bytes first
                filepath = IMAGES_DIR / filename
                temp_path = filepath.with_suffix('.tmp.jpg')

                # Get raw image data
                raw_img = part.as_image()
                raw_img.save(str(temp_path))

                # Open with PIL for processing
                with Image.open(temp_path) as img:
                    # Resize for web
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

                    # Convert to RGB if needed
                    if img.mode == 'RGBA' and not filename.endswith('.png'):
                        img = img.convert('RGB')

                    # Save as optimized file
                    if filename.endswith('.png'):
                        img.save(filepath, 'PNG', optimize=True)
                    else:
                        img.save(filepath, 'JPEG', quality=85, optimize=True)

                # Remove temp file
                temp_path.unlink(missing_ok=True)

                size_kb = filepath.stat().st_size / 1024
                print(f"  [OK] Saved: {filename} ({size_kb:.0f}KB)")
                return True

    except Exception as e:
        print(f"  [ERR] {filename}: {e}")
        return False

def main():
    print("Generating logo and decorations...\n")

    # 1. LOGO - Clean, modern, minimal
    generate_image(
        prompt="""Create a minimal, modern logo for 'Web Studio' - a web design agency.
        Design: Clean typography-based logo with subtle geometric accent.
        Style: Flat design, no gradients, professional.
        Colors: Deep violet/purple (#7c3aed) on transparent or white background.
        The text 'Web Studio' should be in a modern sans-serif font.
        Add a small geometric shape (cube, hexagon, or abstract W) as an icon mark.
        Minimalist, premium feel, suitable for a tech/design company.
        NO realistic elements, NO 3D effects, just clean vector-style graphics.""",
        filename="logo.png",
        aspect_ratio="3:2",
        max_width=400
    )

    # 2. Abstract gradient shape for decoration
    generate_image(
        prompt="""Create an abstract decorative gradient blob shape.
        Style: Soft, organic blob with smooth edges, like a liquid drop.
        Colors: Gradient from violet (#7c3aed) to blue (#3b82f6) to cyan (#06b6d4).
        Background: Completely transparent or white.
        Soft glow effect, dreamy, ethereal quality.
        Modern, minimal, suitable for website decoration.
        Semi-transparent, glass-like quality.""",
        filename="gradient-blob.png",
        aspect_ratio="1:1",
        max_width=600
    )

    # 3. Geometric pattern for backgrounds
    generate_image(
        prompt="""Create a subtle geometric pattern tile for website background.
        Pattern: Delicate grid of thin lines forming hexagons or triangles.
        Colors: Very light gray (#f8fafc) lines on white background.
        Style: Minimal, barely visible, elegant tech aesthetic.
        The pattern should be seamless and tileable.
        Very subtle, almost invisible, just adds texture.
        Clean, modern, professional.""",
        filename="pattern-grid.png",
        aspect_ratio="1:1",
        max_width=400
    )

    # 4. Floating shapes - circles
    generate_image(
        prompt="""Create decorative floating circles for website animation.
        Design: Several soft gradient circles of different sizes.
        Colors: Violet (#7c3aed), blue (#3b82f6), and soft pink (#f472b6).
        Style: Soft edges, blurred, glass-morphism effect.
        Background: Transparent or white.
        Dreamy, floating bubbles aesthetic.
        Semi-transparent, overlapping circles.""",
        filename="floating-circles.png",
        aspect_ratio="16:9",
        max_width=800
    )

    # 5. Abstract wave for section dividers
    generate_image(
        prompt="""Create an abstract wave shape for website section divider.
        Design: Smooth, flowing wave curve.
        Colors: Gradient from violet (#7c3aed) to transparent.
        Style: Minimal, clean, modern.
        Single flowing line or soft gradient wave.
        Suitable for separating website sections.
        Elegant, subtle, professional.""",
        filename="wave-divider.png",
        aspect_ratio="21:9",
        max_width=1200
    )

    # 6. Tech illustration for About/Services
    generate_image(
        prompt="""Create a modern isometric illustration of web development workspace.
        Elements: Laptop, code editor, design tools, floating UI elements.
        Style: Flat isometric, clean lines, minimal details.
        Colors: Violet (#7c3aed), blue (#3b82f6), white, light gray.
        Modern tech aesthetic, suitable for web agency.
        Professional, creative, innovative feeling.
        NO photorealism, clean vector illustration style.""",
        filename="workspace-illustration.png",
        aspect_ratio="4:3",
        max_width=800
    )

    print("\n[DONE] All decorations generated!")

if __name__ == "__main__":
    main()
