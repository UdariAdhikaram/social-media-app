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

const PORT = process.env.PORT || 8000;
const multer = require("multer");
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true })
  
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

  app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/images")
  },
  filename: (req,file,cb)=>{
    cb(null,req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req,res)=>{
  try {
    return res.status(200).json("File uploaded successfully.")
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
