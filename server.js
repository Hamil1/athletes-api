const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const router = require ("./routes/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rules of the API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(router);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port 3000");
});
