import AccordionItem from '@/features/home/faq/accordion-item/ui/AccordionItem';
import { useFAQs } from '@/shared/api/queries';
import Faq from '@/entities/Faq';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import Error from '@/widgets/common/fetch-status/error/ui/Error';

function AccordionList(): React.ReactElement {
	const { data, isLoading, error } = useFAQs(); // Список всех часто задаваемых вопросов

	if (isLoading) return <Info text='Загрузка часто задаваемых вопросов...' />;

	if (error)
		return (
			<Error
				text='При загрузке часто задаваемых вопросов произошла ошибка!
				Пожалуйста, проверьте ваше интернет соединение.'
			/>
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
