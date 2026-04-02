const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    }catch(err){
        console.error("MongoDB connection error:", err);
        process.exit(1); //if db connection fail, the server stops immediately instead of running without a database;
    }
};

module.exports = connectDB;