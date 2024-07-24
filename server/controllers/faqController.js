const express = require('express');
const router = express.Router();
const FaqModel = require('../models/Faq');

const getFaq = async (req, res) => {
    const faqs = await FaqModel.find();

	res.json(faqs);
}

module.exports = { getFaq }