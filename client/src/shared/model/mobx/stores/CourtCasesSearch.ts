import { makeAutoObservable } from 'mobx';

// Хранит поле поиска со страницы "Судебные кейсы"
class CourtCasesSearch {
	query: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setQuery(newQuery: string): void {
		this.query = newQuery;
	}
}

export default new CourtCasesSearch();
