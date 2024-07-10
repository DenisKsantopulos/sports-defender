import styles from './survey-options.module.scss';

function SurveyOptions(): React.ReactElement {
	return (
		<div className={styles['survey__options']}>
			<article className={styles['options__item']}>
				<input
					type='radio'
					id='001'
					value='У меня травма'
					name='survey-options'
					className={styles['options__radio-button']}
				/>
				<label htmlFor='001' className={styles['options__label']}>
					У меня травма
				</label>
			</article>
			<article className={styles['options__item']}>
				<input
					type='radio'
					id='002'
					value='Хочу вернуть товар'
					name='survey-options'
					className={styles['options__radio-button']}
				/>
				<label htmlFor='002' className={styles['options__label']}>
					Хочу вернуть товар
				</label>
			</article>
			<article className={styles['options__item']}>
				<input
					type='radio'
					id='003'
					value='Хочу вернуть деньги за услуги спортивной организации'
					name='survey-options'
					className={styles['options__radio-button']}
				/>
				<label htmlFor='003' className={styles['options__label']}>
					Хочу вернуть деньги за услуги спортивной организации
				</label>
			</article>
			<button className={styles['survey__proceed']}>Дальше</button>
		</div>
	);
}

export default SurveyOptions;
