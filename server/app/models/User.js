const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const User = new Schema(
  {
    _id: Number,
    fullname: String,
    photo: String,
    email: String,
    username: String,
    password: String,
    facebookId: String,
  },
  {
    _id: false,
    timestamps: true,
  }
);
//add plugin
User.plugin(AutoIncrement);

module.exports = mongoose.model("User", User);
