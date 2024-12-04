const express = require("express");
const router = express.Router();

const app = express();

app.get("/name/:name", (req, res) => {
  const name = req.params.name;
  return res.json(name);
});

app.all("*", (req, res, next) => {
  return res.status(404).json({
    message: "not found",
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
