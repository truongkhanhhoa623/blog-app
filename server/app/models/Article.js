const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose);
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const  Article = new Schema(
    {
        title: String,
        author: {
            type: Number,
            ref: 'User'
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
           }],
        content: String,
        slug: { type: String, slug: "title", unique: true },
        pushlish: Boolean,
    },
    {
        timestamps: true,
    }
); 

//add plugin

// Article.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Article', Article)