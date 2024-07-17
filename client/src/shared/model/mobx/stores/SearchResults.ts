import Document from '@/entities/Document';
import { makeAutoObservable, runInAction } from 'mobx';

// Хранит результаты поиска - документы
class SearchResults {
	results: Document[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	clearResults(): void {
		runInAction(() => {
			this.results = [];
		});
	}

	setResults(results: Document[]): void {
		runInAction(() => {
			for (const result of results) this.results.push(result);
		});
	}
}

export default new SearchResults();
