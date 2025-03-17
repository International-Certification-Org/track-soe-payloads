const url = require("url");

function handleStartExamProcess(req, res) {
  const uuid = req.params.uuid;
  console.log("\n\nsqmsExamStartedRequest\n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuid);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  const responseData = {
    data: {
      exam_process: {
        uuid: uuid,
        missing_questions: []
      }
    }
  };
  return res.send(responseData);
}

module.exports = handleStartExamProcess;
