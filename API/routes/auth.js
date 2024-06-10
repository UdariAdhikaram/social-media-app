const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//Login
router.post("/login", async (req,res)=> {
    try {
        //email validate
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");

        //password validete
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
})

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