const Block = require("../models/Block");
const fs = require("fs");
const axios = require("axios");

// var parser = parse({ columns: true }, function (err, records) {
//   console.log("records", records);
//   var json = JSON.stringify(records);
//   fs.writeFile("blocks.json", json, "utf8", () => console.log("ding"));
// });

// fs.createReadStream(__dirname + "/blocks.csv").pipe(parser);

fs.readFile("blocks.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    const blocksArray = JSON.parse(data); //now it an object

    blocksArray.forEach(async (block, index) => {
      if (index > 2231 && index < 2300) {
        await axios.post("http://localhost:5050/api/blocks", {
          height: block.height,
          builder: block.builder || "unknown",
        });
      }
    });
  }
});
