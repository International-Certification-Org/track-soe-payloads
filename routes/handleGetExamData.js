const url = require("url");

function handleGetExamData(req, res) {
  const uuidExamProcess = req.params.uuidExamProcess;
  console.log("\n\nmockSqmsGetExamDataRequest\n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuidExamProcess);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  const responseData = {
    data: {
      exam_process: {
        uuid: uuidExamProcess,
        url: `soe/exam-process/${uuidExamProcess}`,
        state: "pending",
        questions: [
          {
            uuid: "question-1",
            selected_answers: ["answer-1"],
            state: "ok",
            screen_images: [
              {
                url: "https://example.com/screen_image_1.jpg",
                created_at: new Date().toISOString(),
                state: "ok",
                cognition_data: {}
              }
            ],
            camera_images: [
              {
                url: "https://example.com/camera_image_1.jpg",
                created_at: new Date().toISOString(),
                state: "ok",
                cognition_data: {}
              }
            ]
          }
        ]
      }
    }
  }
  console.log("Response Data:", responseData);
  return res.send(responseData);
}

module.exports = handleGetExamData;
