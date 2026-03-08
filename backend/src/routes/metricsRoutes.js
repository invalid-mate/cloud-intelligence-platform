const express = require("express");
const router = express.Router();

const {
  cpuMetrics,
  memoryMetrics,
  networkMetrics,
  diskMetrics
} = require("../controllers/metricsController");

router.get("/cpu", cpuMetrics);
router.get("/memory", memoryMetrics);
router.get("/network", networkMetrics);
router.get("/disk", diskMetrics);

module.exports = router;
