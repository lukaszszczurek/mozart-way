"""
Generate portfolio images using Gemini API
"""
import os
from pathlib import Path

# Check for API key
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("ERROR: GEMINI_API_KEY not set")
    print("Please set it with: set GEMINI_API_KEY=your_key_here")
    exit(1)

from google import genai
from google.genai import types

client = genai.Client(api_key=api_key)
output_dir = Path(__file__).parent.parent / "public" / "images"
output_dir.mkdir(parents=True, exist_ok=True)

def generate_image(prompt: str, filename: str, aspect_ratio: str = "16:9"):
    """Generate a single image with Gemini"""
    print(f"Generating: {filename}...")

    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[prompt],
        config=types.GenerateContentConfig(
            response_modalities=['IMAGE'],
            image_config=types.ImageConfig(
                aspect_ratio=aspect_ratio,
                image_size="2K"
            ),
        ),
    )

    for part in response.parts:
        if part.inline_data:
            image = part.as_image()
            filepath = output_dir / filename
            image.save(str(filepath))
            print(f"  Saved: {filepath}")
            return True

    print(f"  Failed to generate {filename}")
    return False

# Portfolio/Case Study images
portfolio_images = [
    {
        "prompt": "Modern SaaS dashboard mockup on laptop screen, clean minimal UI design, dark mode interface with charts and analytics, professional product photography style, soft studio lighting, shallow depth of field, tech startup aesthetic, 3D floating elements",
        "filename": "case-techstart.jpg",
        "aspect": "16:9"
    },
    {
        "prompt": "E-commerce website mockup on iMac screen showing organic eco products store, green natural color scheme, lifestyle products grid, professional studio photography, clean white background, modern minimal design aesthetic",
        "filename": "case-greenlife.jpg",
        "aspect": "16:9"
    },
    {
        "prompt": "Corporate law firm website mockup on MacBook Pro, professional dark blue and gold color scheme, elegant typography, marble texture elements, premium business aesthetic, studio lighting, luxury feel",
        "filename": "case-lawfirm.jpg",
        "aspect": "16:9"
    },
]

# Hero background
hero_images = [
    {
        "prompt": "Abstract geometric 3D shapes floating in space, soft gradient background from white to light gray, minimal modern design, subtle shadows, tech aesthetic, clean professional look, isometric style elements, muted colors",
        "filename": "hero-bg.jpg",
        "aspect": "21:9"
    },
]

# Service illustrations
service_images = [
    {
        "prompt": "Isometric 3D illustration of a simple website landing page, minimal style, soft pastel colors, white background, clean modern design, single page concept, floating UI elements",
        "filename": "service-starter.jpg",
        "aspect": "1:1"
    },
    {
        "prompt": "Isometric 3D illustration of a complex multi-page website with CMS dashboard, minimal style, soft blue gradient, white background, modern design, multiple screens concept",
        "filename": "service-pro.jpg",
        "aspect": "1:1"
    },
    {
        "prompt": "Isometric 3D illustration of an e-commerce shopping platform with cart and products, minimal style, soft green gradient, white background, modern design, shopping concept",
        "filename": "service-ecommerce.jpg",
        "aspect": "1:1"
    },
]

# Decorative elements
decorative = [
    {
        "prompt": "Abstract 3D blob shape, soft gradient from purple to blue, smooth organic form, minimal design, white background, subtle shadow, modern aesthetic",
        "filename": "blob-1.png",
        "aspect": "1:1"
    },
    {
        "prompt": "Abstract 3D geometric crystal shape, soft gradient from orange to pink, faceted surface, minimal design, white background, subtle reflection, modern aesthetic",
        "filename": "blob-2.png",
        "aspect": "1:1"
    },
]

print("=" * 50)
print("Generating images for Web Studio portfolio")
print("=" * 50)

all_images = portfolio_images + hero_images + service_images + decorative

for img in all_images:
    try:
        generate_image(img["prompt"], img["filename"], img["aspect"])
    except Exception as e:
        print(f"  Error: {e}")

print("\nDone! Check public/images/ folder")
