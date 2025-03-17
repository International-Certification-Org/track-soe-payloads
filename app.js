// Import necessary modules
const express = require("express");
const bodyParser = require('body-parser');

// Import route handlers
const handleHome = require("./routes/handleHome");
const handleStartExamProcess = require("./routes/handleStartExamProcess");
const handleUpdateQuestion = require("./routes/handleUpdateQuestion");
const handleMouseMovement = require("./routes/handleMouseMovement");
const handleEndExamProcess = require("./routes/handleEndExamProcess");
const handleGetExamData = require("./routes/handleGetExamData");

// Initialize the Express application
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json({ limit: '50mb' })); // Set JSON payload limit to 1150MB
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Set URL-encoded payload limit to 1150MB

// Route Handlers

// Home route
app.get("/", handleHome);

// Start exam process
app.patch("/soe/exam-process/:uuid/start", handleStartExamProcess);

// Update question
app.patch("/soe/exam-process/:uuidExamProcess/questions/:uuidQuestion", handleUpdateQuestion);

// Mouse movement update
app.post("/soe/exam-process/:uuidExamProcess/update/mouse-movement", handleMouseMovement);

// End exam process
app.patch("/soe/exam-process/:uuidExamProcess/end", handleEndExamProcess);

// Get exam data
app.get("/soe/exam-process/:uuidExamProcess", handleGetExamData);

// Start the server
app.listen(3000, function () {
  console.log("Listening on port 3000");
});