import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()

GitHub_username = "ishyaerospace"
repos_url = f"https://api.github.com/users/{GitHub_username}/repos"
CACHE_FILE = "cache/github_data.json"


def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)


@app.get("/")
async def root():
    repos = requests.get(repos_url).json()
    cache = {
        "Time": time(),
        "repos":[ 
            {
            "name": repo["name"],
            "description": repo["description"],
            "url": repo["html_url"]
            }
        for repo in repos
        ],
    }

    save_cache(cache)
    return cache 
    