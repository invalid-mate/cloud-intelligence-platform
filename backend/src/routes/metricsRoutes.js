const express = require("express");
const router = express.Router();

const { getCpuMetrics } = require("../controllers/metricsController");

router.get("/cpu", getCpuMetrics);

module.exports = router;