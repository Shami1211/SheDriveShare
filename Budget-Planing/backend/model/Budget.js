const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema({ 
  date: {
    type: Date, // Change the type to Date
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  }, 
  exprend: {
    type: Number,
    required: true,
  }, 
  saving: {
    type: Number,
    required: true,
  }, 
});

module.exports = mongoose.model("Budget", budgetSchema);
