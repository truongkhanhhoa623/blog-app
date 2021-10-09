const mongoose = require("mongoose");

function connect(url) {
  try {
    mongoose.connect(url).then(() => {
      console.log("Connect to MongoDB");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}

module.exports = {connect}
