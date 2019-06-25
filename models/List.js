const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "item"
    }
  ]
});

module.exports = List = mongoose.model("list", ListSchema);
