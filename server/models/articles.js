const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    summary: String
})

const ArticleModel = mongoose.model("example", ArticleSchema)
module.exports = ArticleModel