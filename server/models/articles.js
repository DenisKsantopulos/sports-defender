const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    // title: String,
    // author: String,
    // category: String,
    // summary: String
    name: String,
    email: String,
    age: Number
})

const ArticleModel = mongoose.model("users", ArticleSchema)
module.exports = ArticleModel