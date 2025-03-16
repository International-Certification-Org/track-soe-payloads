const express = require("express");
const url = require("url");
const app = express();

app.get("/", function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  return res.send("Hello World 3");
});

app.patch("/soe/exam-process/:uuid/start", function (req, res) {
  const uuid = req.params.uuid; // Extract the uuid from the URL
  console.log("\n\nsqmsExamStartedRequest \n\n\n");
  console.log("UUID:", uuid);
  const parsedUrl = url.parse(req.url, true);
  console.log("Full URL:", req.url);
  console.log("Pathname:", parsedUrl.pathname);
  console.log("Query Parameters:", parsedUrl.query);
  return res.send(`Received UUID: ${uuid}`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
