const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("trying cicd-1");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});