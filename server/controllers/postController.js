const Post = require("../models/postModel");

// get all posts
exports.getAll = async (req, res) => {
    try {
        const posts = await Post.find();
        if (!posts) {
            res.status(404).send({
                success: false,
                message: "No posts yet"
            });
        } else {
            res.status(200).send({
                success: true,
                posts
            });
        }
    } catch (error) {
        console.log(error);
    }
}


//get single post
exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findOne({ _id: postId });
        if (!post) {
            res.status(404).send({
                success: false,
                message: "no post"
            });
        } else {
            res.status(200).send({
                success: true,
                post
            });
        }
    } catch (error) {
        console.log(error);
    }
}

//create a post
exports.createPost = async (req, res) => {
    try {
        const { title, message } = req.body;
        if (!title || !message) {
            res.status(400).send({
                success: false,
                message: "Enter all fields"
            });
        } else {
            const post = await Post.create(req.body);
            res.status(201).send({
                success: true,
                post
            });
        }
    } catch (error) {
        console.log(error);
    }
}

//update a post
exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findOne({ _id: postId });
        if (!post) {
            res.status(404).send({
                success: false,
                message: "no post"
            });
        } else {
            const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { ...req.body }, { new: true });
            res.status(200).send({
                success: true,
                updatedPost
            });
        }
    } catch (error) {
        console.log(error);
    }
}

//delete a post
exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findOneAndDelete({ _id: postId });
        res.status(200).send({
            success: true,
            post
        });
    } catch (error) {
        console.log(error);
    }
}