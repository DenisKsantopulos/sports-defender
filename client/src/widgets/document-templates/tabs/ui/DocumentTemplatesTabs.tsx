import styles from './document-templates-tabs.module.scss';

function DocumentTemplatesTabs(): React.ReactElement {
	return (
		<>
			<div className={styles['tabs']}>
				<p
					className={`${styles['tabs__item']} ${styles['tabs__item--active']}`}
				>
					Все категории
				</p>
				<p className={styles['tabs__item']}>Заявления</p>
				<p className={styles['tabs__item']}>Досудебные претензии</p>
				<p className={styles['tabs__item']}>Жалобы в Роспотребнадзор</p>
			</div>
		</>
	);
}

export default DocumentTemplatesTabs;
