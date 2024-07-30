import express, { Router } from 'express';
import { getDocs } from '../controllers/documentController';
import { getErr } from '../controllers/errorController';
import { getFaq } from '../controllers/faqController';
import { getSurvey } from '../controllers/surveyController';
import { getSearch } from '../controllers/searchController';

const router: Router = express.Router();

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

export default router;
