const express = require("express");
const app = express();
const port = 9090;

app.get("/", function (request, response) {
  console.log("Hello World");
  response.send("Hello World again");
});
app.listen(port, function () {
  console.log("Server is running on port ");
});
