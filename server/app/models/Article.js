const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  Article = new Schema(
    {
        title: String,
        feature_img: String,
        content: String,
    }
);

module.exports = mongoose.model('Article', Article)