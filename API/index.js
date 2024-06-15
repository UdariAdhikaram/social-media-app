const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true })
  
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

/*app.get("/",(req,res)=>{
  res.send("welcome to home page")
});

app.get("/users",(req,res)=>{
  res.send("welcome to user page")
});*/

app.listen(3000,()=>{
    console.log("Backend server is running!..")
});
