const {
  getCpuMetrics,
  getMemoryMetrics,
  getNetworkMetrics,
  getDiskMetrics
} = require("../services/metricsService");

const cpuMetrics = async (req, res) => {
  try {
    const data = await getCpuMetrics();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch CPU metrics" });
  }
};

const memoryMetrics = async (req, res) => {
  try {
    const data = await getMemoryMetrics();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch memory metrics" });
  }
};

const networkMetrics = async (req, res) => {
  try {
    const data = await getNetworkMetrics();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch network metrics" });
  }
};

const diskMetrics = async (req, res) => {
  try {
    const data = await getDiskMetrics();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch disk metrics" });
  }
};

module.exports = {
  cpuMetrics,
  memoryMetrics,
  networkMetrics,
  diskMetrics
};
