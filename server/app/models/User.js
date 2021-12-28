const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);
const jwt = require("jsonwebtoken");
const User = new Schema(
  {
    _id: Number,
    fullname: String,
    picture: String,
    email: String,
    password: String,
    facebookId: String,
    token: String,
  },
  {
    _id: false,
    timestamps: true,
  }
);
//add plugin
User.plugin(AutoIncrement);

User.methods.generateAuthToken = async function () {
  const token_jwt = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
  this.token = token_jwt;
  await this.save();
  return token_jwt;
};
User.statics.findToken = function (token, callback) {
  jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
    this.findOne({ _id: decode._id, token: token }, (err, user) => {
      if (err) return callback(err);
      callback(null, user);
    });
  });
};
User.statics.deleteToken = function (token, callback) {
  this.updateOne({ $unset: { token: 1 } }, (err, user) => {
    if (err) return callback(err);
    callback(null, user);
  });
};
module.exports = mongoose.model("User", User);
