const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "Hi Bro I am from small chat App build by Atif Shaikh",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
