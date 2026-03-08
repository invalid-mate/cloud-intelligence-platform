// metricsService.js

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getCpuMetrics = async () => {
  return {
    metric: "cpu",
    value: getRandomValue(20, 85)
  };
};

const getMemoryMetrics = async () => {
  return {
    metric: "memory",
    value: getRandomValue(30, 60)
  };
};

const getNetworkMetrics = async () => {
  return {
    metric: "network",
    value: getRandomValue(100, 900)
  };
};

const getDiskMetrics = async () => {
  return {
    metric: "disk",
    value: getRandomValue(40, 300)
  };
};

module.exports = {
  getCpuMetrics,
  getMemoryMetrics,
  getNetworkMetrics,
  getDiskMetrics
};