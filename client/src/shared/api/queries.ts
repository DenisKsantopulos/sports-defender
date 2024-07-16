import useSWR from 'swr';
import Faq from '@/entities/Faq';

// Вернуть список всех часто задаваемых вопросов для главной страницы сайта
export function useFAQs() {
	return useSWR<Faq[]>('/question-answer');
}
