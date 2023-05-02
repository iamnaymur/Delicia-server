const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const chiefs = require("./data/chiefs.json");

app.get("/", (req, res) => {
  res.send("Delicia server is running");
});

app.get("/chiefs", (req, res) => {
  res.send(chief);
});

app.get("/chiefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const recipe = chiefs.find((n) => n.id === id);
  res.send(recipe);
});

app.listen(port, () => {
  console.log(`Delcia api is running on port ${port}`);
});
