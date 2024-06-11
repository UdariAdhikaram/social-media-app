const router = require("express").Router();

router.get("/",(req,res)=>{
    console.log("post");
// Create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;