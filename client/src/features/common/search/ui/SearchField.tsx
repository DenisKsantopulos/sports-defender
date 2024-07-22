import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import styles from './search-field.module.scss';

interface SearchFieldArgumentsType {
	store: any; // MobX store хранит текст запроса в поле поиска
}

const SearchField = observer(
	({ store }: SearchFieldArgumentsType): React.ReactElement => {
		return (
			<div className={styles.search}>
				<input
					type='search'
					placeholder='Введите запрос...'
					value={store.query}
					onChange={e => store.setQuery(e.target.value)}
					className={styles['search__input']}
				/>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className={styles['search__icon']}
				/>
			</div>
		);
	}
);

export default SearchField;
