import AccordionList from '@/features/home/faq/accordion/ui/AccordionList';
import styles from './faq.module.scss';

export default function FAQ(): React.ReactElement {
	return (
		<section className={`${styles.container} faq-scroll-to`}>
			<h2 id='faq' className={styles['faq__title']}>
				Часто задаваемые вопросы
			</h2>
			<p className={styles['faq__description']}>
				Этот раздел охватывает основные проблемы, с которыми
				сталкиваются участники правовых отношений.
			</p>
			<div className={styles['faq__accordions']}>
				<AccordionList />
			</div>
		</section>
	);
}
