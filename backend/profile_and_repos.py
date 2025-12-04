import json
from fastapi import FastAPI
import requests
from time import time

app = FastAPI()
GitHub_username = "ishyaerospace"
CACHE_FILE = "cache/github_data.json"

profile_url = f"https://api.github.com/users/{GitHub_username}"
repos_url = f"https://api.github.com/users/{GitHub_username}/repos"

def save_cache(data):
    with open(CACHE_FILE, "w") as file:
        json.dump(data, file, indent=4)

"""
@app.get("/github/profile")
async def get_github_profile():
    profile = requests.get(profile_url).json()

    cache =  {
        "fetched_at": time(),
        "profile":{
            "login": profile["login"],
            "bio": profile["bio"],
            "avatar": profile["avatar_url"],
            "public_repos": profile["public_repos"]
        },
    }
    
    save_cache(cache)
    return cache

@app.get("/github/repos")
async def get_github_repos():
    repos = requests.get(repos_url).json()

    cache = {
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
"""
@app.get("/")
async def get_github_info():
    profile = requests.get(profile_url).json()
    repos = requests.get(repos_url).json()

    cache =  {
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
    
    save_cache(cache)
    return cache