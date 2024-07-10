import styles from './court-cases-tabs.module.scss';

function CourtCasesTabs(): React.ReactElement {
	return (
		<>
			<div className={styles['tabs']}>
				<p
					className={`${styles['tabs__item']} ${styles['tabs__item--active']}`}
				>
					Все категории
				</p>
				<p className={styles['tabs__item']}>Товары</p>
				<p className={styles['tabs__item']}>Услуги</p>
			</div>
		</>
	);
}

export default CourtCasesTabs;
