const express = require("express");
const { join } = require("fs");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`);
});
