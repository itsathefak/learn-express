const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(3000, () => {
  console.log(`The port is running on ${3000}`);
});

app.get("/", (req, res) => {
  res.send("you sent a res to root path");
});

app.get("/bmw", (req, res) => {
  res.send("you sent a res to bmw");
});

app.get("/audi", (req, res) => {
  res.send("you sent a res to audi");
});

app.get("*", (req, res) => {
  res.send("wrong path");
});

// app.use((req, res) => {
//   console.log("Request Recived");
//   res.send("<h1>Cars</h1><ul><li>bmw</li><li>audi</li></ul>");
// });
