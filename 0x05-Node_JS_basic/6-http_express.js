const express = require("express");

const app = express();
const PORT = 1245;

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening at -> http://localhost:${PORT}\n`);
});

module.exports = app;
