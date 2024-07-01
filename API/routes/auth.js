const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

//Register
router.post("/register", async (req,res)=>{
    
    try {
    //generate new password(to safe)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            city:req.body.city,
            from:req.body.from,
            desc:req.body.desc,
            relationship:req.body.relationship,
        });

        //save user and respond
        const user = await newUser.save();
        return res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

//Login
router.post("/login", async(req, res) => {
    try {
        // email validate
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        // password validate
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        // If everything is valid, send the user data
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router

/*const user = await new User({
        username:"Safak",
        email:"safak@gmail.com",
        password:"safak123"
    })
    await user.save();
    res.send("ok")
http://localhost:8000/api/auth/register
*/