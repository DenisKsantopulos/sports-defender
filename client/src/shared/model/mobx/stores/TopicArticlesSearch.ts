import { makeAutoObservable } from 'mobx';

// Хранит поле поиска со страницы "Тематические статьи"
class TopicArticlesSearch {
	query: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setQuery(newQuery: string): void {
		this.query = newQuery;
	}
}

export default new TopicArticlesSearch();
