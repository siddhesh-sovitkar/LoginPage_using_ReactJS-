const express = require("express");

//create express app
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//create end point
app.get("/", (request, response) => {
  //send 'Hi, from Node server' to client

  response.send("Hi, from Node server");
});

// create handler for POST requests coming at path '/test'
app.post("/test", (request, response) => {
  var data = request.body;

  console.log(data);
  if (data.username == "Tom" && data.password == "Tom123") {
    const auth = {
      authorized: true
    };
    response.send(auth);
  } else {
    const auth = {
      authorized: false
    };
    response.send(auth);
  }
});

//port at which the server will run
const PORT = process.env.PORT || 3000;

//start server and listen for the request
app.listen(PORT, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${PORT}`)
);
