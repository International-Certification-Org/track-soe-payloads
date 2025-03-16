const express = require("express");
const url = require("url");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  return res.send("Hello World");
});

app.patch("/soe/exam-process/:uuid/start", function (req, res) {
  const uuid = req.params.uuid; // Extract the uuid from the URL
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
});

app.patch("/soe/exam-process/:uuidExamProcess/questions/:uuidQuestion", function (req, res) {
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
});


app.post("/soe/exam-process/:uuidExamProcess/update/mouse-movement", function (req, res) {
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
);

app.patch("/soe/exam-process/:uuidExamProcess/end", function (req, res) {
  const uuidExamProcess = req.params.uuidExamProcess;
  console.log("\n\nsqmsExamCompleted\n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuidExamProcess);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  console.log("Body:", req.body);
  const responseData = {
    data: {
      exam_process: {
        url: `soe/exam-process/${uuidExamProcess}/end/`
      }
    }
  };
  return res.send(responseData);
});


app.get("/soe/exam-process/:uuidExamProcess", function (req, res) {
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
  }}
  console.log("Response Data:", responseData);
  return res.send(responseData);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
