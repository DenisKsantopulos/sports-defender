import DocumentsModel from '../models/Documents';

interface SearchCriteriaType {
	type?: string;
	category?: string;
	title?: RegExp;
}

// /search?query=...&offset=...&limit=...
// /search?type=...&query=...&offset=...&limit=...
// /search?type=...&category=...&query=...&offset=...&limit=...
const getSearch = async (req: any, res: any) => {
	try {
		const type: string = req.query.type; // Тип документа (шаблон, статья или кейс)
		const category: string = req.query.category; // Категория документа (заявления, претензии, товары и пр.)
		const query: string = req.query.query;
		const limit: number = req.query.limit; // Максимальное количество выводимых запросов за раз
		const offset: number = req.query.offset * limit; // С какого элемента надо выводить запросы (необходимо умножить на limit, т.к это pageIndex в SWR)

		// Формируем объект запроса
		let searchCriteria: SearchCriteriaType = {};

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
};

export { getSearch };
