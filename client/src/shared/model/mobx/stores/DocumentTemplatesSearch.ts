import { makeAutoObservable } from 'mobx';

// Хранит поле поиска со страницы "Шаблоны документов"
class DocumentTemplatesSearch {
	query: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setQuery(newQuery: string): void {
		this.query = newQuery;
	}
}

export default new DocumentTemplatesSearch();
