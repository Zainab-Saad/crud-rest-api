const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/users", usersRouter);
app.use(homeRouter);

const server = http.createServer(app);

app.listen(3001);
