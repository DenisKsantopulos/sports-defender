import useSWR from 'swr';
import Faq from '@/entities/Faq';
import Survey from '@/entities/Survey';

// Вернуть список всех часто задаваемых вопросов для главной страницы сайта
export function useFAQs() {
	return useSWR<Faq[]>('/question-answer');
}

// Вернуть объект анкеты (вопрос или документ) по его ID
export function useSurveyById(id: number) {
	return useSWR<Survey>(`/surveys/${id}`);
}
