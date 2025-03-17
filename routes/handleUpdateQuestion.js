const url = require("url");

function handleUpdateQuestion(req, res) {
  const uuidExamProcess = req.params.uuidExamProcess;
  const uuidQuestion = req.params.uuidQuestion;
  console.log("\n\nmockSqmsUpdateQuestion\n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuidExamProcess);
  console.log("Question UUID:", uuidQuestion);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  console.log("Body:", req.body);
  const responseData = {
    data: {
      exam_process: {
        uuid: uuidExamProcess,
        missing_questions: []
      }
    }
  };
  return res.send(responseData);
}

module.exports = handleUpdateQuestion;
