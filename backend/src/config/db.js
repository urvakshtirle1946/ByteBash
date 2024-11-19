const mongoose = require("mongoose");
const { dbURI } = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
