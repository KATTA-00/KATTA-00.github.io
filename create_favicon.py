"""
Professional Favicon Generator
Creates a clean, professional favicon with initials KG
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_professional_favicon():
    # Create a 64x64 image with transparent background
    size = 64
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Create a professional blue gradient circle background
    # Draw multiple circles to simulate gradient
    center = size // 2
    radius = 28
    
    # Gradient from light blue to dark blue
    for i in range(radius, 0, -1):
        alpha = int(255 * (radius - i + 1) / radius)
        # Blue gradient: light blue (74, 144, 226) to dark blue (46, 90, 138)
        r = int(74 + (46 - 74) * i / radius)
        g = int(144 + (90 - 144) * i / radius)
        b = int(226 + (138 - 226) * i / radius)
        
        draw.ellipse([center - i, center - i, center + i, center + i], 
                    fill=(r, g, b, alpha))
    
    # Add a subtle border
    draw.ellipse([4, 4, size-4, size-4], outline=(30, 59, 92, 255), width=2)
    
    # Add text "KG" in the center
    try:
        # Try to use a nice font, fallback to default if not available
        font_size = 24
        try:
            font = ImageFont.truetype("arial.ttf", font_size)
        except:
            try:
                font = ImageFont.truetype("DejaVuSans-Bold.ttf", font_size)
            except:
                font = ImageFont.load_default()
        
        text = "KG"
        
        # Calculate text position to center it
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (size - text_width) // 2
        y = (size - text_height) // 2 - 2  # Slightly adjust for visual centering
        
        # Draw white text with subtle shadow
        draw.text((x+1, y+1), text, fill=(0, 0, 0, 100), font=font)  # Shadow
        draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)  # Main text
        
    except Exception as e:
        print(f"Font error: {e}")
        # Fallback: draw simple geometric shapes for K and G
        # This is a simplified version if font loading fails
        draw.rectangle([18, 20, 22, 44], fill=(255, 255, 255))  # K vertical line
        draw.rectangle([22, 28, 28, 32], fill=(255, 255, 255))  # K horizontal
        draw.polygon([(28, 32), (34, 44), (39, 44), (32, 32)], fill=(255, 255, 255))  # K diagonal
        
    # Save as PNG
    output_path = "assets/img/favicon.png"
    img.save(output_path, "PNG")
    print(f"Professional favicon created: {output_path}")
    
    # Also create a 32x32 version
    img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save("assets/img/favicon-32.png", "PNG")
    
    # Create apple-touch-icon (180x180)
    img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save("assets/img/apple-touch-icon.png", "PNG")
    
    print("All favicon variants created successfully!")

if __name__ == "__main__":
    create_professional_favicon()