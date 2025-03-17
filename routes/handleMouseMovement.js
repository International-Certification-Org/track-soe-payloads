const url = require("url");

function handleMouseMovement(req, res) {
  const uuidExamProcess = req.params.uuidExamProcess;
  console.log("\n\nmockSqmsMouseMovementRequest\n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuidExamProcess);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  console.log("Body:", req.body);
  const responseData = {
    data: {
      exam_process: {
        uuid: uuidExamProcess
      }
    }
  };
  return res.send(responseData);
}

module.exports = handleMouseMovement;
