const express = require('express');
const router = express.Router();
const DocumentsModel = require('../models/Documents');

// /search?query=...&offset=...&limit=...
// /search?type=...&query=...&offset=...&limit=...
// /search?type=...&category=...&query=...&offset=...&limit=...
const getSearch = async (req, res) => {
    try {
		const type = req.query.type; // Тип документа (шаблон, статья или кейс)
		const category = req.query.category; // Категория документа (заявления, претензии, товары и пр.)
		const query = req.query.query;
		const limit = req.query.limit; // Максимальное количество выводимых запросов за раз
		const offset = req.query.offset * limit; // С какого элемента надо выводить запросы (необходимо умножить на limit, т.к это pageIndex в SWR)

		// Формируем объект запроса
		let searchCriteria = {};

		if (type && type !== '') {
			searchCriteria.type = type;
		}

		if (category && category !== '' && category !== 'Все категории') {
			searchCriteria.category = category;
		}

		if (query && query !== '') {
			searchCriteria.title = new RegExp(query, 'i'); // Регулярное выражение для частичного совпадения
		}

		// Фильтруем выдачу результатов
		const results = await DocumentsModel.find(searchCriteria, undefined, {
			skip: offset,
			limit,
		});

		// Отправляем клиенту отфильтрованные результаты
		res.json(results);
	} catch (err) {
		res.status(500).json({
			message: 'Something went wrong during searching!',
			error: err,
		});
	}
}

module.exports = { getSearch }