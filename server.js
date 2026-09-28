const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "🚀 CI/CD deployment successful!",
        service: "Node.js Demo Server",
        deployedAt: new Date().toISOString()
    });;
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});