import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()

GitHub_username = "ishyaerospace"
profile_url = f"https://api.github.com/users/{GitHub_username}"
CACHE_FILE = "cache/github_data.json"
CACHE_EXPIRY = 0

def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)


@app.get("/")
async def root():
    profile = requests.get(profile_url).json()
    cache = {
        "Time": time(),
        "profile":{
        "login": profile["login"],
        "bio": profile["bio"],
        "avatar": profile["avatar_url"],
        "public_repos": profile["public_repos"]
        }, 
    }
    save_cache(cache)
    return cache 
    