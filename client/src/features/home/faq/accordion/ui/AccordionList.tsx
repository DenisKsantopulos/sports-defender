import AccordionItem from '@/features/home/faq/accordion-item/ui/AccordionItem';
import { useFAQs } from '@/shared/api/queries';
import Faq from '@/entities/Faq';
import styles from './accordion-list.module.scss';

function AccordionList(): React.ReactElement {
	const { data, isLoading, error } = useFAQs(); // Список всех часто задаваемых вопросов

	if (isLoading)
		return (
			<p className={styles['accordions__loading']}>
				Загрузка часто задаваемых вопросов...
			</p>
		);

	if (error)
		return (
			<p className={styles['accordions__error']}>
				При загрузке часто задаваемых вопросов произошла ошибка!
				Пожалуйста, проверьте ваше интернет соединение.
			</p>
		);

	return (
		<>
			{data?.map((faq: Faq) => (
				<AccordionItem
					key={faq.id}
					question={faq.question}
					answer={faq.answer}
				/>
			))}
		</>
	);
}

export default AccordionList;
