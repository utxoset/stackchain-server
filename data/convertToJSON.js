const fs = require("fs");
var { parse } = require("csv-parse");

const csvFilePath = "/blocks.csv";
const JsonFileName = "blocks.json";

var parser = parse({ columns: true }, function (err, records) {
  console.log("records", records);
  var json = JSON.stringify(records);
  fs.writeFile("blocks.json", json, "utf8", () => console.log("ding"));
});

fs.createReadStream(__dirname + "/blocks.csv").pipe(parser);
