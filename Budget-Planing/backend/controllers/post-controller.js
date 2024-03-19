const Post = require("../model/Post");

const getAllPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    console.log(err);
  }

  if (!posts) {
    return res.status(404).json({ message: "No posts found" });
  }
  return res.status(202).json({ posts });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "No post found" });
  }
  return res.status(200).json({ post });
};

const addPost = async (req, res, next) => {
  const { date, title, caption, image } = req.body;
  let post;
  try {
    post = new Post({
      date,
      title,
      caption,
      image,
    });
    await post.save();
  } catch (err) {
    console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unable to add post" });
  }
  return res.status(201).json({ post });
};

module.exports = {
  getAllPosts,
  getById,
  addPost,
};
