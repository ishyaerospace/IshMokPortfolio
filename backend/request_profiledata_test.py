from fastapi import FastAPI
import requests
from time import time

app = FastAPI()
GitHub_username = "ishyaerospace"
profile_url = f"https://api.github.com/users/{GitHub_username}"
@app.get("/")
async def root():
    profile = requests.get(profile_url).json()
    return {
        "Time": time(),
        "profile":{
        "login": profile["login"],
        "bio": profile["bio"],
        "avatar": profile["avatar_url"],
        "public_repos": profile["public_repos"]
        },
    }