const express = require("express");
const cors = require("cors");

const metricsRoutes = require("./routes/metricsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cloud Intelligence Backend Running 🚀");
});

app.use("/api/metrics", metricsRoutes);

/*
Render provides PORT automatically
*/
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});