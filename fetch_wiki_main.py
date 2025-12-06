import os
import time
import re
import requests

# ==========================================
# CONFIGURATION
# ==========================================
SAVE_DIR = "images_database"
PLANTS_FILE = "plants.js" 
HEADERS = {'User-Agent': 'CelestialApothecaryBot/1.0 (educational_project)'}

def load_plants_from_js(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        # Regex to find JS objects
        plant_blocks = re.findall(r"\{[\s\S]*?\}", content)
        plants = []
        for block in plant_blocks:
            # Extract ID and Latin Name
            id_match = re.search(r"id:\s*'([^']*)'", block)
            latin_match = re.search(r"latinName:\s*'([^']*)'", block)
            if id_match and latin_match:
                plants.append({'id': id_match.group(1), 'latinName': latin_match.group(1)})
        return plants
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        return []

def get_official_wiki_image(query_name, save_folder):
    S = requests.Session()
    URL = "https://en.wikipedia.org/w/api.php"
    
    # 1. Get the Main Page Image URL
    params = {
        "action": "query",
        "titles": query_name,
        "prop": "pageimages",  # Ask specifically for the Page Image
        "piprop": "original",  # Ask for the original (high-res) URL
        "redirects": 1,        # Automatically resolve Latin -> Common name redirects
        "format": "json"
    }

    try:
        R = S.get(url=URL, params=params, headers=HEADERS)
        data = R.json()
        pages = data.get("query", {}).get("pages", {})

        # The API returns a dictionary where the key is the Page ID.
        # We just want the first (and only) page returned.
        for page_id, page_data in pages.items():
            if page_id == "-1":
                print(f"   [!] Page not found for: {query_name}")
                return False
            
            if "original" in page_data:
                image_url = page_data["original"]["source"]
                print(f"   ✅ Found Main Image: {image_url}")
                download_image(image_url, save_folder, "main.jpg")
                return True
            else:
                print(f"   ⚠️ Page exists, but has no main image set.")
                return False

    except Exception as e:
        print(f"   [!] Error: {e}")
        return False

def download_image(url, folder, filename):
    try:
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code == 200:
            with open(os.path.join(folder, filename), 'wb') as f:
                f.write(r.content)
    except Exception as e:
        print(f"   [!] Download failed: {e}")

# ==========================================
# MAIN EXECUTION
# ==========================================
def main():
    if not os.path.exists(SAVE_DIR): os.makedirs(SAVE_DIR)
    
    plant_list = load_plants_from_js(PLANTS_FILE)
    total = len(plant_list)
    
    print(f"✨ OFFICIAL IMAGE HARVEST ✨")
    print("------------------------------------------------")

    for index, plant in enumerate(plant_list):
        plant_id = plant['id']
        latin_name = plant['latinName']
        
        # Create folder for this plant
        plant_folder = os.path.join(SAVE_DIR, plant_id)
        if not os.path.exists(plant_folder): os.makedirs(plant_folder)

        print(f"[{index+1}/{total}] {latin_name}...")
        
        # Fetch only the official image
        get_official_wiki_image(latin_name, plant_folder)
            
        time.sleep(0.5) # Be polite to the API

if __name__ == "__main__":
    main()