import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()
GitHub_username = "ishyaerospace"
CACHE_FILE = "cache/github_data.json"

profile_url = f"https://api.github.com/users/{GitHub_username}"
repos_url = f"https://api.github.com/users/{GitHub_username}/repos"
orgs_url = f"https://api.github.com/users/{GitHub_username}/orgs"


def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)


@app.get("/")
async def github_info():
    profile = requests.get(profile_url).json()
    repos = requests.get(repos_url).json()
    orgs = requests.get(orgs_url).json()

    cache = {
        "fetched_at": time(),
        "profile":{
            "login": profile["login"],
            "bio": profile["bio"],
            "avatar": profile["avatar_url"],
            "public_repos": profile["public_repos"]
        },

        "repos":[ 
        {
            "name": repo["name"],
            "description": repo["description"],
            "url": repo["html_url"]
        }
        for repo in repos
        ],

        "orgs": [
            {
                "login": org["login"],
                "avatar": org["avatar_url"],
                "url": org["url"],
            }
        for org in orgs
        ] 
    }
    save_cache(cache)
    return cache
