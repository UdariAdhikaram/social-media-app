const router = require("express").Router();
const User = require("../models/User");

//Register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
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