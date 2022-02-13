const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: {
    type: Number,
    ref: "User",
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
