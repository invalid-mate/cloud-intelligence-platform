from fastapi import FastAPI
from anomaly_model import detect_anomaly

app = FastAPI()

@app.get("/")
def root():
    return {"message": "AI Engine Running"}

@app.get("/analyze")
def analyze(metric: str, value: float):

    result = detect_anomaly(value)

    return {
        "metric": metric,
        "value": value,
        "status": result
    }