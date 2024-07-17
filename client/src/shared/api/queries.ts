import useSWR from 'swr';
import Faq from '@/entities/Faq';
import Survey from '@/entities/Survey';
import Document from '@/entities/Document';

// Вернуть список всех часто задаваемых вопросов для главной страницы сайта
export function useFAQs() {
	return useSWR<Faq[]>('/question-answer');
}

// Вернуть объект анкеты (вопрос или документ) по его ID
export function useSurveyById(id: number) {
	return useSWR<Survey>(`/surveys/${id}`);
}

// Вернуть список найденных документов
export function useSearch(q: string | null) {
	return useSWR<Document[]>(q ? `/search?q=${q}` : null);
}
