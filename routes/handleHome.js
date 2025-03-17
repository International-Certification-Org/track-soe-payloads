const url = require("url");

function handleHome(req, res) {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  return res.send("Hello World");
}

module.exports = handleHome;
