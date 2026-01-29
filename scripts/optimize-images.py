#!/usr/bin/env python3
"""
Optimize images for web performance.
Compresses and resizes images to reasonable web sizes.
"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip install Pillow")
    from PIL import Image

IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"

# Target sizes and quality settings
SETTINGS = {
    "case-": {"max_width": 1200, "quality": 85},  # Portfolio images
    "hero-": {"max_width": 1920, "quality": 80},  # Hero background
    "service-": {"max_width": 800, "quality": 85},  # Service cards
    "blob-": {"max_width": 400, "quality": 85},  # Decorative blobs
}

def get_settings(filename: str) -> dict:
    for prefix, settings in SETTINGS.items():
        if filename.startswith(prefix):
            return settings
    return {"max_width": 1200, "quality": 85}

def optimize_image(filepath: Path) -> None:
    filename = filepath.name
    settings = get_settings(filename)

    try:
        with Image.open(filepath) as img:
            original_size = filepath.stat().st_size

            # Convert RGBA to RGB for JPEG
            if img.mode == 'RGBA' and filepath.suffix.lower() in ['.jpg', '.jpeg']:
                img = img.convert('RGB')

            # Resize if larger than max_width
            if img.width > settings["max_width"]:
                ratio = settings["max_width"] / img.width
                new_height = int(img.height * ratio)
                img = img.resize((settings["max_width"], new_height), Image.Resampling.LANCZOS)

            # Save optimized image
            if filepath.suffix.lower() == '.png':
                # For PNGs, also create WebP version
                img.save(filepath, optimize=True)
                webp_path = filepath.with_suffix('.webp')
                img.save(webp_path, 'WEBP', quality=settings["quality"])
            else:
                img.save(filepath, quality=settings["quality"], optimize=True)

            new_size = filepath.stat().st_size
            reduction = (1 - new_size / original_size) * 100

            print(f"[OK] {filename}: {original_size/1024:.0f}KB -> {new_size/1024:.0f}KB ({reduction:.1f}% smaller)")

    except Exception as e:
        print(f"[ERR] {filename}: Error - {e}")

def main():
    print("Optimizing images for web...\n")

    image_files = list(IMAGES_DIR.glob("*.jpg")) + list(IMAGES_DIR.glob("*.png"))

    if not image_files:
        print("No images found to optimize.")
        return

    total_before = sum(f.stat().st_size for f in image_files)

    for filepath in sorted(image_files):
        optimize_image(filepath)

    total_after = sum(f.stat().st_size for f in image_files)

    print(f"\nTotal: {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB")
    print(f"Saved: {(total_before - total_after)/1024/1024:.1f}MB ({(1 - total_after/total_before)*100:.1f}%)")

if __name__ == "__main__":
    main()
