require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("AI BlogNest Backend is Running!");
});

app.post("/api/blog", (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({
            message: "Topic is required"
        });
    }

    res.json({
        message: "Blog request received successfully!",
        topic: topic
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
process.stdin.resume();