const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("Hello World 2");
  return res.send("Hello World 2");
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
