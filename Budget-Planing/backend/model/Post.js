// ../model/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
