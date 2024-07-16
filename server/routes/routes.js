const express = require('express');
const router = express.Router();
const TemplateModel = require('../models/Templates');
const SurveyModel = require('../models/Surveys');
const QaModel = require('../models/Qa')
//const stemmer = require('stemmer');
//const stemmer = require('mongoose-stemmer');

router.get('/get-templates', (req, res) => {
  TemplateModel.find()
    .then(templates => res.json(templates))
    .catch(err => res.json(err))
});

router.get('/question-answer', (req, res) => {
	QaModel.find()
	 .then(qa => res.json(qa))
	 .catch(err => res.json(err));
});

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

router.get('/search', async (req, res) => {
	const query = req.query.q;
	if (!query || query.trim() === '') {
	  return res.json([]);
	}
	try {
	  const templates = await TemplateModel.find({ title: { $regex: query, $options: 'i' } }).exec();
	  res.json(templates);
	} catch (err) {
	  res.status(500).send({ message: 'Error searching templates' });
	}
  });

router.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

module.exports = router;