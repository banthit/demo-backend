var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Ok.");
})

app.listen(5000, function() {
  console.log("Connected.");
})
