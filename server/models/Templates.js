const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
    title: String,
    type: String,
    size: String,
    link: String
})

const TemplateModel = mongoose.model("templates", TemplateSchema)
module.exports = TemplateModel