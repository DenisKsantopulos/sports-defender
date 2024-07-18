const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
	id: Number, // ID вопроса
	text: {
		type: String,
		default: null,
		required: false,
	}, // Сам вопрос, его может не быть, если юзер прошел до конца анкеты и получает шаблон документа
	note: {
		type: String,
		default: null,
		required: false,
	}, // Справочная информация, ее может не быть для каждого вопроса
	answers: {
		type: [
			// Список ответов на вопрос, их может не быть, если юзер прошел до конца анкеты и получает шаблон документа
			{
				id: Number, // ID ответа
				text: String, // текст ответа
				nextQuestionId: Number, // На какой вопрос в анкете ссылается данный вариант ответа
			},
		],
		default: null,
		required: false,
	},
	solutionDocumentId: {
		// Ссылка на шаблон документа, если юзер прошел всю анкету
		type: String,
		default: null,
		required: false,
	},
});

const SurveyModel = mongoose.model('surveys', SurveySchema);
module.exports = SurveyModel;
