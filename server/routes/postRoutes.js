const express = require("express");
const controller = require("../controllers/postController");

const router = express.Router();

// get all posts
router.get("/all", controller.getAll);

//get single post
router.get("/get/:id", controller.getPostById);

//create a post
router.post("/create", controller.createPost);

//update a post
router.put("/update/:id", controller.updatePost);

//delete a post
router.delete("/delete/:id", controller.deletePost);

module.exports = router;