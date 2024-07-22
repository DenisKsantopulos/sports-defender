import useSWR from 'swr';
import Faq from '@/entities/Faq';
import Survey from '@/entities/Survey';
import Document from '@/entities/Document';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

// Вернуть список всех часто задаваемых вопросов для главной страницы сайта
export function useFAQs() {
	return useSWR<Faq[]>('/get-frequently-asked-questions');
}

// Вернуть объект вопрос анкеты по его ID
export function useSurveyById(id: number) {
	return useSWR<Survey>(`/surveys/${id}`);
}

// Вернуть документ по его ID
export function useDocumentById(id: string | undefined) {
	return useSWR<Document>(id ? `/get-document/${id}` : null);
}

// Вернуть список найденных документов
export function useInfiniteSearch(
	type: string,
	category: string,
	query: string
) {
	const getKey: SWRInfiniteKeyLoader = (
		pageIndex: number,
		previousPageData: Document[]
	) => {
		if (previousPageData && !previousPageData.length) return null; // Дошли до конца

		return `/search?type=${type}&category=${category}&query=${query}&offset=${pageIndex}&limit=10`;
	};

	return useSWRInfinite<Document[]>(getKey);
}
