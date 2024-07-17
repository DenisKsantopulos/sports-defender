const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
	title: String,
	type: String,
	size: String,
	link: String,
	category: String,
});

TemplateSchema.index({ title: 'text' }); // create a text index on the title field

const TemplateModel = mongoose.model('templates', TemplateSchema);
module.exports = TemplateModel;
// 2 6
// 1
// 4
