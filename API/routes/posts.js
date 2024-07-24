const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const router = express.Router();
const { ObjectId } = require('mongodb');

// Create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json(error);
    }
});

// Update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated");
        } else {
            res.status(403).json("You can update only your post");
        }
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json(error);
    }
});

// Delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        } else {
            res.status(403).json("You can delete only your post");
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json(error);
    }
});

// Like and dislike a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (error) {
        console.error("Error liking/disliking post:", error);
        res.status(500).json(error);
    }
});

// Get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json(error);
    }
});

// Get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    // console.log(req.params.userId);
    try {
        const currentUser = await User.find({ _id: new ObjectId('666c5057969a79f83d730852')});
        console.log(currentUser.followings);
        const userPosts = await Post.find({ userId: req.params.userId });
        const friendPosts = await Promise.all(
            currentUser.followings?.map((friendID) => Post.find({ userId: friendID }))
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
        console.error("Error fetching timeline posts:", error);
        res.status(500).json(error);
    }
});

// Get user's all posts
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json("User not found");
        }
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching user posts:", error);
        res.status(500).json(error);
    }
});

module.exports = router;
