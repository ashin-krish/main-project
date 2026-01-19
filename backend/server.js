const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.send("Message received successfully!");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
