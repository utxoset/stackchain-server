const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StackjoinSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  miner: {
    type: String,
    required: true,
  },
  twitterURL: {
    type: String,
    // required: true,
  },
  spent: {
    type: Boolean,
    // required: true,
  },
});

module.exports = Stackjoin = mongoose.model("stackjoin", StackjoinSchema);
