const express = require('express');
const router = express.Router();
const { getDocs } = require('../controllers/documentController');
const { getSurvey } = require('../controllers/surveyController');
const { getSearch } = require('../controllers/searchController');
const { getFaq } = require('../controllers/FaqController');
const { getErr } = require('../controllers/errorController');

// Получить документ по ID
router.get('/get-document/:id', getDocs);
// Получить часто задаваемые вопросы
router.get('/get-frequently-asked-questions', getFaq);
// Получить вопрос для анкеты по ID
router.get('/surveys/:id', getSurvey);
// Вернуть документы по определенной категории, типу и поисковому запросу (Infinite Scroll)
router.get('/search', getSearch);
// Обработка 404 ошибки
router.get('*', getErr);

module.exports = router;
