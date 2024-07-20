const express = require('express');
const router = express.Router();
const DocumentsModel = require('../models/Documents');
const SurveyModel = require('../models/Surveys');
const FaqModel = require('../models/Faq');
//const stemmer = require('stemmer');

// Получить документ по ID
router.get('/get-document/:id', async (req, res) => {
	try {
		const documentId = req.params.id; // ID документа, который нужен клиенту

		// Поиск элемента в MongoDB по ID
		const document = await DocumentsModel.findOne({ id: documentId });

		if (!document) {
			return res.status(404).send({
				message: 'Документ не был найден на сервере!',
			});
		}

		// Отправка найденного документа клиенту в формате JSON
		res.json(document);
	} catch (error) {
		res.status(500).send({ message: 'Oops, server error' });
	}
});

// Получить часто задаваемые вопросы
router.get('/get-frequently-asked-questions', async (req, res) => {
	const faqs = await FaqModel.find();

	res.json(faqs);
});

// Получить вопрос для анкеты по ID
router.get('/surveys/:id', async (req, res) => {
	try {
		const surveyId = req.params.id; // ID вопроса, который нужен клиенту

		// Поиск элемента в MongoDB по ID
		const survey = await SurveyModel.findOne({ id: surveyId });

		if (!survey) {
			return res
				.status(404)
				.send({ message: 'Вопрос не был найден на сервере!' });
		}

		// Отправка найденного вопрос клиенту в формате JSON
		res.json(survey);
	} catch (error) {
		res.status(500).send({ message: 'Oops, server error' });
	}
});

// Вернуть документы по определенной категории, типу и поисковому запросу (Infinite Scroll)
// /search?query=...&offset=...&limit=...
// /search?type=...&query=...&offset=...&limit=...
// /search?type=...&category=...&query=...&offset=...&limit=...
router.get('/search', async (req, res) => {
	const type = req.query.type; // Тип документа (шаблон, статья или кейс)
	const category = req.query.category; // Категория документа (заявления, претензии, товары и пр.)
	const query = req.query.query;
	const limit = req.query.limit; // Максимальное количество выводимых запросов за раз
	const offset = req.query.offset * limit; // С какого элемента надо выводить запросы (необходимо умножить на limit, т.к это pageIndex в SWR)

	if (query.length !== 0) {
		let documents = undefined;

		if (type.length === 0) {
			// Поиск по всей базе
			documents = await DocumentsModel.find(
				{
					title: { $regex: query, $options: 'i' },
				},
				undefined,
				{ skip: offset, limit }
			).exec();
		} else {
			if (category.length === 0 || category === 'Все категории') {
				// Поиск по типу только
				documents = await DocumentsModel.find(
					{
						$and: [
							{ title: { $regex: query, $options: 'i' } },
							{ type },
						],
					},
					undefined,
					{ skip: offset, limit }
				);
			} else {
				// Поиск по типу и категории
				documents = await DocumentsModel.find(
					{
						$and: [
							{ title: { $regex: query, $options: 'i' } },
							{ type },
							{ category },
						],
					},
					undefined,
					{ skip: offset, limit }
				);
			}
		}

		res.json(documents);
	} else {
		res.status(500).json({ message: 'Search Query Empty!' });
	}
});

// Обработка 404 ошибки
router.get('*', (req, res) => {
	res.status(404).send({ message: 'Not Found' });
});

module.exports = router;
