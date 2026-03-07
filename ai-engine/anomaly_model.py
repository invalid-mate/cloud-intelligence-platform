from sklearn.ensemble import IsolationForest
import numpy as np

# Example training data (normal system usage)
data = np.array([
    [20], [25], [23], [22], [21], [24], [26], [27], [23]
])

model = IsolationForest(contamination=0.1)
model.fit(data)

def detect_anomaly(value):
    prediction = model.predict([[value]])

    if prediction[0] == -1:
        return "anomaly"
    else:
        return "normal"