const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(3000, () => {
  console.log(`The port is running on ${3000}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Nothing on Q");
  }
  res.send(`<h1>You have searched for query : ${q}</h1>`);
});

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   let htmlstr = `<h1>Welcome to the page of @${username}.</h1>`;
//   res.send(htmlstr);
// });

// app.use((req, res) => {
//   console.log("Request Recived");
//   res.send("<h1>Cars</h1><ul><li>bmw</li><li>audi</li></ul>");
// });
