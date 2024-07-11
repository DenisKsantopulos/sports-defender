import noResultsImage from '@/app/ui/assets/nothing-found.png';
import styles from './nothing-found.module.scss';

function NothingFound(): React.ReactElement {
	return (
		<div className={styles['nothing-found']}>
			<img
				src={noResultsImage}
				alt='Ничего не найдено'
				title='Ничего не найдено'
				className={styles['nothing-found__image']}
			/>
			<h3 className={styles['nothing-found__title']}>
				По вашему запросу ничего не найдено...
			</h3>
		</div>
	);
}

export default NothingFound;
