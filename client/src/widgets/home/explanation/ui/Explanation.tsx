import React from 'react';
import image from '@/app/ui/assets/explanation-section.png';
import useAos from '@/shared/model/hooks/useAos';
import styles from './explanation.module.scss';

function Explanation(): React.ReactElement {
	useAos();

	return (
		<section className={styles.container} data-aos='fade-right'>
			<img
				src={image}
				alt='Что такое ЗоЗПП?'
				loading='lazy'
				className={styles['explanation__image']}
			/>
			<div>
				<h2 className={styles['explanation__title']}>
					Что такое закон о защите прав потребителей?
				</h2>
				<p className={styles['explanation__description']}>
					Закон о защите прав потребителей (ЗоЗПП) – это
					законодательный акт, регулирующий отношения между
					потребителями и продавцами товаров или услуг. Он
					устанавливает права потребителей на качество продукции,
					информацию о ней, а также правила возврата и обмена товаров.
					ЗоЗПП обеспечивает защиту потребителей от недобросовестных
					продавцов и способствует справедливому разрешению споров.
				</p>
			</div>
		</section>
	);
}

export default Explanation;
