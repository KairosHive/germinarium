"""
Image Compression Script for Apothecary
Compresses all images in images_database folder for web optimization
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
INPUT_DIR = "images_database"
MAX_WIDTH = 800  # Max width in pixels
MAX_HEIGHT = 800  # Max height in pixels
QUALITY = 80  # JPEG quality (1-100, 80 is good balance)

def compress_image(input_path, output_path=None):
    """Compress a single image"""
    if output_path is None:
        output_path = input_path
    
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for PNG with transparency)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Get original size
            original_size = os.path.getsize(input_path)
            
            # Resize if larger than max dimensions
            img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=QUALITY, optimize=True)
            
            # Get new size
            new_size = os.path.getsize(output_path)
            
            reduction = ((original_size - new_size) / original_size) * 100
            return original_size, new_size, reduction
    except Exception as e:
        print(f"  Error: {e}")
        return None, None, None

def main():
    print("=" * 50)
    print("Image Compression for Apothecary")
    print("=" * 50)
    print(f"Max dimensions: {MAX_WIDTH}x{MAX_HEIGHT}")
    print(f"JPEG quality: {QUALITY}")
    print()
    
    total_original = 0
    total_new = 0
    count = 0
    
    # Walk through all subdirectories
    for root, dirs, files in os.walk(INPUT_DIR):
        for filename in files:
            if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                filepath = os.path.join(root, filename)
                print(f"Processing: {filepath}")
                
                original, new, reduction = compress_image(filepath)
                
                if original and new:
                    total_original += original
                    total_new += new
                    count += 1
                    print(f"  {original/1024:.1f}KB → {new/1024:.1f}KB ({reduction:.1f}% smaller)")
    
    print()
    print("=" * 50)
    print(f"Compressed {count} images")
    print(f"Total: {total_original/1024/1024:.2f}MB → {total_new/1024/1024:.2f}MB")
    if total_original > 0:
        total_reduction = ((total_original - total_new) / total_original) * 100
        print(f"Overall reduction: {total_reduction:.1f}%")
    print("=" * 50)

if __name__ == "__main__":
    main()
