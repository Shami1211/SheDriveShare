
const express = require("express");
const router = express.Router();
const Post = require("../model/Post");
const postController = require("../controllers/post-controller");

router.get("/", );

router.get("/", postController.getAllPosts);
router.post("/",postController.addPost );
router.get("/:id",postController.getById );
//router.put("/:id", booksController.updateBook);
//router.delete("/:id", booksController.deleteBook);

module.exports = router;
