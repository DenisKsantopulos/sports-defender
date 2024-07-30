import mongoose from 'mongoose';

const DocumentsSchema = new mongoose.Schema({
	title: String, // Заголовок документа
	type: String, // Тип документа (статья, кейс или шаблон)
	category: String, // Категория документа (заявление, жалобы и пр)
	size: String, // Размер документа
	viewLink: String, // Ссылка для просмотра в Google Docs
	downloadLink: String, // Ссылка на скачивание в Google Docs
	instructionViewLink: {
		// Ссылка для просмотра инструкции по заполнению шаблона в Google Docs (только для документов с типом шаблон)
		type: String,
		default: null,
		required: false,
	},
	instructionDownloadLink: {
		// Ссылка на скачивание инструкции по заполнению шаблона в Google Docs (только для документов с типом шаблон)
		type: String,
		default: null,
		required: false,
	},
});

DocumentsSchema.index({ title: 'text', type: 'text', category: 'text' }); // create a text index on the title, type, category field

const DocumentsModel = mongoose.model('documents', DocumentsSchema);

export default DocumentsModel;
