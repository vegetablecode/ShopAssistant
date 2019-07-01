const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  lists: [{
    type: Schema.Types.ObjectId,
    ref: "item"
  }]
});

module.exports = User = mongoose.model("user", UserSchema);
