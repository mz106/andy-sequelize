const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("App is healthy");
});

app.listen(5001, () => {
  console.log("App is listening");
});
