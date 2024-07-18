export interface Answer {
	id: number;
	text: string;
	nextQuestionId: number; // ID следующего вопроса в анкете, на который ссылается данный вариант ответа
}

// Вопрос, который передается при работе анкеты
interface Survey {
	id: number;
	text: string | null; // Сам вопрос, его может не быть, если юзер прошел до конца анкеты и получает шаблон документа
	note: string | null; // Справочная информация, ее может не быть для каждого вопроса
	answers: Answer[] | null; // Список ответов на вопрос, их может не быть, если юзер прошел до конца анкеты и получает шаблон документа
	solutionDocumentId: string | null; // ID шаблона документа, который появляется в конце анкеты
}

export default Survey;
