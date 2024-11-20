const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // in hours
  createdAt: { type: Date, default: Date.now },
  students: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);
