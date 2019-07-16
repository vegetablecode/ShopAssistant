const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: "item"
  }
});

module.exports = Item = mongoose.model("product", ProductSchema);
