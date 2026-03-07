const axios = require("axios");

/*
Use ENV variable for Prometheus URL
*/
const PROMETHEUS_URL =
  process.env.PROMETHEUS_URL || "http://localhost:9090";

exports.getCpuMetrics = async (req, res) => {
  try {

    const response = await axios.get(
      `${PROMETHEUS_URL}/api/v1/query?query=node_cpu_seconds_total`
    );

    res.json(response.data);

  } catch (error) {

    console.error("Prometheus error:", error.message);

    res.status(500).json({
      error: "Failed to fetch CPU metrics",
    });
  }
};