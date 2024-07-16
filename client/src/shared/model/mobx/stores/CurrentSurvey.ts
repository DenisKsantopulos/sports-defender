import { action, makeObservable, observable } from 'mobx';

// Хранит состояние анкеты
class CurrentSurvey {
	private LOCAL_STORAGE_KEY: string = 'survey-id';
	private DEFAULT_ID: number = 1; // Изначально ID текущего элемента анкеты

	surveyId: number =
		Number(localStorage.getItem(this.LOCAL_STORAGE_KEY)) || this.DEFAULT_ID;

	constructor() {
		makeObservable(this, {
			surveyId: observable,
			setSurveyId: action,
			reset: action,
		});
	}

	// Установка нового текущего ID элемента анкеты в Local Storage
	setSurveyId(newSurveyId: number): void {
		this.surveyId = newSurveyId;
		localStorage.setItem(this.LOCAL_STORAGE_KEY, newSurveyId.toString());
	}

	// Устанавливаем ID текущего элемента анкеты в значение по умолчанию
	reset(): void {
		this.surveyId = 1;
		localStorage.setItem(
			this.LOCAL_STORAGE_KEY,
			this.DEFAULT_ID.toString()
		);
	}
}

export default new CurrentSurvey();
