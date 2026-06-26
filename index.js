const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/pesan", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pesan.html"));
});

const PORT = 20046;

app.listen(PORT, () => {
    console.log(`Website berjalan di http://localhost:${PORT}`);
});
