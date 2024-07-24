const express = require('express');
const router = express.Router();
const DocumentsModel = require('../models/Documents');

const getDocs = async (req, res) => {
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
}

module.exports = { getDocs }