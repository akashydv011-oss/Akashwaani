from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

# Health Check Endpoint
@app.get("/health")
async def health_check():
    return JSONResponse(content={"status": "healthy"})

# Chat Endpoint
@app.post("/chat")
async def chat(message: str):
    # Placeholder for chat logic
    return JSONResponse(content={"response": f"You said: {message}"})

# Tasks Endpoint
@app.get("/tasks")
async def get_tasks():
    # Placeholder for fetching tasks
    return JSONResponse(content={"tasks": ["Task 1", "Task 2"]})
