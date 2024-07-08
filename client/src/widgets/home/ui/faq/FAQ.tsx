import faqData from '@/shared/model/faq-data';
import AccordionItem from '@/widgets/home/ui/faq/accordion item/AccordionItem';
import styles from './faq.module.scss';

export default function FAQ(): React.ReactElement {
	return (
		<section className={styles.container}>
			<h2 className={styles['faq__title']}>Часто задаваемые вопросы</h2>
			<p className={styles['faq__description']}>
				Этот раздел охватывает основные проблемы, с которыми
				сталкиваются участники правовых отношений.
			</p>
			<div className={styles['faq__accordions']}>
				{faqData.map(({ id, question, answer }) => (
					<AccordionItem
						key={id}
						question={question}
						answer={answer}
					/>
				))}
			</div>
		</section>
	);
}
