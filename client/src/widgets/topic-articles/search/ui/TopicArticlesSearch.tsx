import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './topic-articles-search.module.scss';

function TopicArticlesSearch(): React.ReactElement {
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Введите название тематической статьи'
				className={styles['search__input']}
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className={styles['search__icon']}
			/>
		</div>
	);
}

export default TopicArticlesSearch;
