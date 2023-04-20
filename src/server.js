require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.post("/books/addbook", (req, res) => {
  try {
    res.send("Hello from /books/addbook");
  } catch (error) {
    console.log(error);
  }
});

app.get("/health", (req, res) => {
  res.send("App is healthy");
});

app.listen(5001, () => {
  console.log("App is listening");
});
