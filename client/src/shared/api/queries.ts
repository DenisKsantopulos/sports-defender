import useSWR from 'swr';
import Faq from '@/entities/Faq';
import Survey from '@/entities/Survey';
import Document from '@/entities/Document';

// Вернуть список всех часто задаваемых вопросов для главной страницы сайта
export function useFAQs() {
	return useSWR<Faq[]>('/get-frequently-asked-questions');
}

// Вернуть объект вопрос анкеты по его ID
export function useSurveyById(id: number) {
	return useSWR<Survey>(`/surveys/${id}`);
}

// Вернуть документ по его ID
export function useDocumentById(id: string) {
	return useSWR<Document>(`/get-document/${id}`);
}

// Вернуть список найденных документов
export function useSearch(
	type: string,
	category: string,
	query: string | null
) {
	return useSWR<Document[]>(
		query !== null
			? `/search?type=${type}&category=${category}&query=${query}`
			: null
	);
}
