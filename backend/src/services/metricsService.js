const axios = require("axios");

const PROMETHEUS_URL = "http://localhost:9090/api/v1/query";
const AI_ENGINE_URL = "http://localhost:8000/analyze";

async function getCpuMetrics() {
  try {

    console.log("Querying Prometheus...");

    const response = await axios.get(PROMETHEUS_URL, {
      params: {
        query: '100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)'
      }
    });

    const results = response.data.data.result;

    if (!results || results.length === 0) {
      return {
        error: "No CPU metrics found"
      };
    }

    const cpuValue = parseFloat(results[0].value[1]);

    console.log("CPU VALUE:", cpuValue);

    const aiResponse = await axios.get(AI_ENGINE_URL, {
      params: {
        metric: "cpu",
        value: cpuValue
      }
    });

    return {
      cpu: cpuValue,
      ai_analysis: aiResponse.data
    };

  } catch (error) {

    console.error("METRICS ERROR:", error.message);

    return {
      error: "Failed to fetch CPU metrics"
    };

  }
}

module.exports = {
  getCpuMetrics
};