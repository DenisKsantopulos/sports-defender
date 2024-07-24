import image from '@/app/ui/assets/explanation-section.png';
import React from 'react';
import styles from './explanation.module.scss';

function Explanation(): React.ReactElement {
	return (
		<section className={styles.container}>
			<img
				src={image}
				alt='Что такое ЗоЗПП?'
				loading='lazy'
				className={styles['explanation__image']}
			/>
			<div>
				<h2 className={styles['explanation__title']}>
					Что такое Закон о защите прав потребителей?
				</h2>
				<p className={styles['explanation__description']}>
					Документ, который регулирует отношения между потребителями и
					продавцами. Потребитель — обычный гражданин, который
					приобретает товары и услуги в личных целях. Этот закон
					защищает его от недобросовестных продавцов, гарантируя права
					на качество, возврат и обмен товаров.
				</p>
			</div>
		</section>
	);
}

export default Explanation;
