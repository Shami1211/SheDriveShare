// Discount Model
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discountSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  total: Number, // Change to Number, remove 'required'
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("Discount", discountSchema);
