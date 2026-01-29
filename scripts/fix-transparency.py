#!/usr/bin/env python3
"""
Fix PNG images that have checkered background pattern instead of true transparency.
Finds dominant background colors in corners and removes them.
"""

from pathlib import Path
from PIL import Image
import numpy as np
from collections import Counter

IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"

def get_dominant_colors_from_edges(img_array, edge_size=20):
    """Get the two most common colors from image edges (likely background)."""
    h, w = img_array.shape[:2]

    edge_pixels = []

    # Top edge
    for y in range(min(edge_size, h)):
        for x in range(w):
            edge_pixels.append(tuple(img_array[y, x, :3]))

    # Bottom edge
    for y in range(max(0, h - edge_size), h):
        for x in range(w):
            edge_pixels.append(tuple(img_array[y, x, :3]))

    # Left edge
    for y in range(h):
        for x in range(min(edge_size, w)):
            edge_pixels.append(tuple(img_array[y, x, :3]))

    # Right edge
    for y in range(h):
        for x in range(max(0, w - edge_size), w):
            edge_pixels.append(tuple(img_array[y, x, :3]))

    if not edge_pixels:
        return None

    # Round colors to reduce noise (group similar colors)
    def round_color(c, step=8):
        return tuple(round(v / step) * step for v in c)

    rounded = [round_color(p) for p in edge_pixels]
    counter = Counter(rounded)

    # Get top 2 most common colors
    most_common = counter.most_common(10)

    # Filter for grayish colors only (background checker is always neutral)
    def is_neutral(c):
        r, g, b = c
        return abs(r - g) < 30 and abs(g - b) < 30 and abs(r - b) < 30

    neutral_colors = [(c, count) for c, count in most_common if is_neutral(c)]

    if len(neutral_colors) >= 2:
        # Return the two most common neutral colors
        return (neutral_colors[0][0], neutral_colors[1][0])
    elif len(neutral_colors) == 1:
        # Only one neutral color - might be solid background
        return (neutral_colors[0][0],)

    return None

def remove_background_colors(img_array, bg_colors, tolerance=45):
    """Remove pixels matching background colors."""
    h, w = img_array.shape[:2]

    modified_count = 0

    for y in range(h):
        for x in range(w):
            pixel_rgb = tuple(img_array[y, x, :3])
            current_alpha = img_array[y, x, 3]

            if current_alpha == 0:
                continue

            for bg_color in bg_colors:
                dist = sum(abs(int(a) - int(b)) for a, b in zip(pixel_rgb, bg_color))
                if dist < tolerance:
                    img_array[y, x, 3] = 0
                    modified_count += 1
                    break

    return modified_count

def fix_transparency(filepath):
    """Fix checkered background in a PNG image."""
    try:
        with Image.open(filepath) as img:
            if img.mode != 'RGBA':
                img = img.convert('RGBA')

            img_array = np.array(img)

            # Get dominant background colors from edges
            bg_colors = get_dominant_colors_from_edges(img_array)

            if bg_colors:
                print(f"  Background colors: {bg_colors}")
                pixels_changed = remove_background_colors(img_array, bg_colors)

                if pixels_changed > 0:
                    result = Image.fromarray(img_array, 'RGBA')
                    result.save(filepath, 'PNG', optimize=True)
                    return pixels_changed

            return 0

    except Exception as e:
        print(f"  Error: {e}")
        import traceback
        traceback.print_exc()
        return 0

def main():
    """Process all PNG images in the public/images directory."""
    print(f"Scanning: {IMAGES_DIR}\n")

    # Skip photo images
    skip_patterns = ['case-', 'service-', 'hero-', 'benefits-', 'mozart-hero']

    png_files = list(IMAGES_DIR.glob("*.png"))

    if not png_files:
        print("No PNG files found.")
        return

    fixed_count = 0
    skipped_count = 0

    for filepath in sorted(png_files):
        if any(pattern in filepath.name for pattern in skip_patterns):
            print(f"Skipping photo: {filepath.name}")
            skipped_count += 1
            continue

        print(f"Processing: {filepath.name}")

        pixels_fixed = fix_transparency(filepath)
        if pixels_fixed > 0:
            print(f"  [FIXED] Made {pixels_fixed} pixels transparent")
            fixed_count += 1
        else:
            print(f"  [SKIP] No background detected")
            skipped_count += 1

    print(f"\n{'='*50}")
    print(f"Done! Fixed: {fixed_count}, Skipped: {skipped_count}")

if __name__ == "__main__":
    main()
