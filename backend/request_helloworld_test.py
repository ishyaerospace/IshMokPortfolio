from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

# use "python -m fastapi dev request_helloworld_test.py" to run 