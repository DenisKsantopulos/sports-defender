const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
    title: String,
    type: String,
    size: String,
    link: String
})

//TemplateSchema.index({ title: 'text' }); // create a text index on the title field

const TemplateModel = mongoose.model("templates", TemplateSchema)
module.exports = TemplateModel