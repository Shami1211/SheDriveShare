const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    
  },
  number: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: false, // Note is optional, so set required to false
  },
});

module.exports = mongoose.model("Drive", driveSchema);
