import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()

GitHub_username = "ishyaerospace"
orgs_url = f"https://api.github.com/users/{GitHub_username}/orgs"
CACHE_FILE = "cache/github_data.json"


def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)


@app.get("/")
async def root():
    orgs = requests.get(orgs_url).json()
    cache = {
        "fetched_at": time(),
        "orgs": [
            {
            "login": org["login"],
            "avatar": org["avatar_url"],
            "url": org["url"],
            }
        for org in orgs
        ],
    }
    save_cache(cache)
    return cache 
    