const url = require("url");

function handleMouseMovement(req, res) {
  const uuidExamProcess = req.params.uuidExamProcess;
  console.log("\n\nmockSqmsMouseMovementRequest ========================  \n");
  console.log("Method:", req.method);
  console.log("Exam-process UUID:", uuidExamProcess);
  const parsedUrl = url.parse(req.url, true);
  console.log("URL:", req.url);
  console.log("Query Parameters:", parsedUrl.query);
  console.log("screen_images:", JSON.stringify(req.body.screen_images, null, 2));
  console.log("camera_images:", JSON.stringify(req.body.camera_images, null, 2));
  console.log("out_at:", JSON.stringify(req.body.out_at, null, 2));
  console.log("in_at:", JSON.stringify(req.body.in_at, null, 2));
  console.log("out_for:", JSON.stringify(req.body.out_for, null, 2))
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
