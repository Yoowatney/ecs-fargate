const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World - 4, do not live 3");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
