import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './court-cases-search.module.scss';

function CourtCasesSearch(): React.ReactElement {
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Введите название судебного кейса'
				className={styles['search__input']}
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className={styles['search__icon']}
			/>
		</div>
	);
}

export default CourtCasesSearch;
