const express = require("express");
const port = 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("Vishal S. Meharwade");
});

app.listen(port);
