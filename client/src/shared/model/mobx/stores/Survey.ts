import { action, makeObservable, observable } from 'mobx';

// Хранит состояние анкеты
class Survey {
	private CURRENT_ID_KEY: string = 'survey-current-id'; // Хранит ID текущего вопроса в Local Storage
	private LIST_PREVIOUS_KEY: string = 'survey-list-previous'; // Хранит массив из ID предыдущих вопросов в Local Storage

	private DEFAULT_CURRENT_ID: number = 1; // Изначальное ID текущего элемента анкеты

	currentSurveyId: number =
		Number(localStorage.getItem(this.CURRENT_ID_KEY)) ||
		this.DEFAULT_CURRENT_ID;
	previousSurveyIds: number[] = JSON.parse(
		localStorage.getItem(this.LIST_PREVIOUS_KEY) || '[]'
	);

	constructor() {
		makeObservable(this, {
			currentSurveyId: observable,
			previousSurveyIds: observable,
			setCurrentSurveyId: action,
			goToPreviousSurveyId: action,
			resetSurvey: action,
		});
	}

	// Установка нового ID текущего вопроса анкеты в Local Storage
	setCurrentSurveyId(newCurrentSurveyId: number): void {
		// Расширяем массив предыдущих вопросов
		this.previousSurveyIds.push(this.currentSurveyId);
		localStorage.setItem(
			this.LIST_PREVIOUS_KEY,
			JSON.stringify(this.previousSurveyIds)
		);

		// Обновляем ID текущего вопроса
		this.currentSurveyId = newCurrentSurveyId;
		localStorage.setItem(
			this.CURRENT_ID_KEY,
			newCurrentSurveyId.toString()
		);
	}

	// Перейти к предыдущему ID вопроса анкеты
	goToPreviousSurveyId(): void {
		if (this.previousSurveyIds.length !== 0) {
			// ID текущего вопроса равен последнему элементу массива из ID предыдущих вопросов
			this.currentSurveyId = this.previousSurveyIds.pop()!;
			localStorage.setItem(
				this.CURRENT_ID_KEY,
				this.currentSurveyId.toString()
			);

			// Последний элемент массива из ID предыдущих вопросов удаляется
			localStorage.setItem(
				this.LIST_PREVIOUS_KEY,
				JSON.stringify(this.previousSurveyIds)
			);
		}
	}

	// Очищаем весь стейт анкеты в Local Storage
	resetSurvey(): void {
		// Очищаем массив из ID предыдущих вопросов
		this.previousSurveyIds = [];
		localStorage.setItem(
			this.LIST_PREVIOUS_KEY,
			JSON.stringify(this.previousSurveyIds)
		);

		// Очищаем ID текущего вопроса
		this.currentSurveyId = this.DEFAULT_CURRENT_ID;
		localStorage.setItem(
			this.CURRENT_ID_KEY,
			this.DEFAULT_CURRENT_ID.toString()
		);
	}
}

export default new Survey();
