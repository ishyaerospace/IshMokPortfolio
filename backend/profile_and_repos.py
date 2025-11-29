import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()
GitHub_username = "ishyaerospace"
CACHE_FILE = "cache/github_data.json"
CACHE_EXPIRY = 0 # placeholder for now


def load_cache():
    try:
        with open(CACHE_FILE, "r") as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        return "unable to find cache file"

def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)

def fetch_github_data():
    profile_url = f"https://api.github.com/users/{GitHub_username}"
    repos_url = f"https://api.github.com/users/{GitHub_username}/repos"


    profile = requests.get(profile_url).json()
    repos = requests.get(repos_url).json()


    return {
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
    }


@app.get("/api/github")
async def get_github_info():
    cache = load_cache()
    
    print("running github script")
    
    if not cache or time() - cache["fetched_at"] > CACHE_EXPIRY:
        cache = fetch_github_data()
        save_cache(cache)

    return cache
