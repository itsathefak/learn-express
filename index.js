const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(3000, () => {
  console.log(`The port is running on ${3000}`);
});
