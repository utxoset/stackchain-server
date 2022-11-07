const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  height: {
    type: Number,
    required: true,
  },
  parent: {
    type: String,
  },
  builder: {
    type: String,
    required: true,
  },
  twitterURL: {
    type: String,
    // required: true,
  },
  proofs: {
    type: [
      {
        amount: Number,
        miner: String,
        twitterURL: String,
      },
    ],
  },
});

module.exports = Block = mongoose.model("block", BlockSchema);
