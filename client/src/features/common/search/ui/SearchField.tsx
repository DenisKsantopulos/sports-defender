/* eslint-disable react-hooks/exhaustive-deps */
import CardTypes from '@/shared/model/data/CardTypes';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import { KeyboardEvent, useEffect } from 'react';
import styles from './search-field.module.scss';
import { useSearchParams } from 'react-router-dom';

interface SearchFieldArgumentsType {
	cardType?: CardTypes;
	category?: string;
	store: any; // MobX store хранит текст запроса в поле поиска
	placeholder: string;
}

const SearchField = observer(
	({
		cardType,
		category,
		store,
		placeholder,
	}: SearchFieldArgumentsType): React.ReactElement => {
		const [, setSearchParams] = useSearchParams();

		// Если поле поиска пустое, то убираем все параметры в URL
		useEffect(() => {
			if (store.query.length === 0) setSearchParams({});
		}, [store.query]);

		// При нажатии на Enter отправляем запрос на поиск
		function handleKeyDownPress(
			event: KeyboardEvent<HTMLInputElement>
		): void {
			if (event.key === 'Enter') performQuery();
		}

		// Устанавливаем поисковые параметры в URL
		function performQuery(): void {
			if (store.query.length !== 0) {
				const searchQuery: string = store.query.trim();

				setSearchParams({
					type: cardType ?? '',
					category: category ?? '',
					query: searchQuery,
				});
			}
		}

		return (
			<div className={styles.search}>
				<input
					type='search'
					placeholder={placeholder}
					value={store.query}
					onChange={e => store.setQuery(e.target.value)}
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
