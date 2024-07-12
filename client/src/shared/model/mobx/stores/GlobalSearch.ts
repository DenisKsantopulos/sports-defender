import { makeAutoObservable } from 'mobx';

// Хранит поле поиска со страницы "Поиск по всей базе"
class GlobalSearch {
	query: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setQuery(newQuery: string): void {
		this.query = newQuery;
	}
}

export default new GlobalSearch();
