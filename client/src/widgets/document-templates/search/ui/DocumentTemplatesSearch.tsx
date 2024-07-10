import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './document-templates-search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function DocumentTemplatesSearch(): React.ReactElement {
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Введите название шаблона документа'
				className={styles['search__input']}
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className={styles['search__icon']}
			/>
		</div>
	);
}

export default DocumentTemplatesSearch;
