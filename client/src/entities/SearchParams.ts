interface SearchParamsType {
	type: string; // Тип документа (шаблон, статья, кейс)
	category: string; // Категория документа (заявление, претензия, товары и пр.)
	query: string; // Сам поисковой запрос пользователя
}

export default SearchParamsType;
