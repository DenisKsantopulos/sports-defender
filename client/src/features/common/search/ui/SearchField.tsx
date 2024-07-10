import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { KeyboardEvent, memo, useState } from 'react';
import styles from './search-field.module.scss';

interface SearchFieldArgumentsType {
	placeholder: string;
}

const SearchField = memo(
	({ placeholder }: SearchFieldArgumentsType): React.ReactElement => {
		const [query, setQuery] = useState<string>('');

		// При нажатии на Enter отправляем запрос на поиск
		function handleKeyDownPress(
			event: KeyboardEvent<HTMLInputElement>
		): void {
			if (event.key === 'Enter') performQuery();
		}

		// Выполняем запрос на поиск данных
		function performQuery(): void {
			if (query.length !== 0) {
				// TODO: perform search
				const searchQuery: string = query.trim();
				console.log(`SEARCH QUERY = ${searchQuery}`);
			}
		}

		return (
			<div className={styles.search}>
				<input
					type='search'
					placeholder={placeholder}
					value={query}
					onChange={e => setQuery(e.target.value)}
					onKeyDown={handleKeyDownPress}
					className={styles['search__input']}
				/>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className={styles['search__icon']}
					onClick={performQuery}
				/>
			</div>
		);
	}
);

export default SearchField;
