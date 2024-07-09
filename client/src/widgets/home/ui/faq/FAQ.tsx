import faqData from '@/shared/model/data/FAQ';
import AccordionItem from '@/widgets/home/ui/faq/accordion-item/AccordionItem';
import useAos from '@/shared/model/hooks/useAos';
import styles from './faq.module.scss';

export default function FAQ(): React.ReactElement {
	useAos();

	return (
		<section
			className={`${styles.container} faq-scroll-to`}
			data-aos='fade-left'
		>
			<h2 id='faq' className={styles['faq__title']}>
				Часто задаваемые вопросы
			</h2>
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
