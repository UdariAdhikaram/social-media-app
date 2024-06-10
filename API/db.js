const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            "mongodb+srv://storybook:storybook123@cluster0.taf5eow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("mongoDB connected");
    }
    catch (error)
    {
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;