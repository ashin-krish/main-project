const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    console.log("Received:", name, email);
    res.send("Message received successfully!");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
