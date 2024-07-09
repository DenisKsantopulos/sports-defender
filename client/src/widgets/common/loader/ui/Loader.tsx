import styles from './loader.module.scss';

function Loader(): React.ReactElement {
	return (
		<div className={styles.loader}>
			<h2 className={styles['loader__title']}>Загрузка...</h2>
		</div>
	);
}

export default Loader;
