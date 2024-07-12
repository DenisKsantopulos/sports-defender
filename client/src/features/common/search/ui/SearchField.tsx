import CardTypes from '@/shared/model/data/CardTypes';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import { KeyboardEvent } from 'react';
import styles from './search-field.module.scss';

interface SearchFieldArgumentsType {
	cardType?: CardTypes;
	category?: string;
	store: any; // MobX store
	placeholder: string;
}

const SearchField = observer(
	({
		cardType,
		category,
		store,
		placeholder,
	}: SearchFieldArgumentsType): React.ReactElement => {
		// При нажатии на Enter отправляем запрос на поиск
		function handleKeyDownPress(
			event: KeyboardEvent<HTMLInputElement>
		): void {
			if (event.key === 'Enter') performQuery();
		}

		// Выполняем запрос на поиск данных
		function performQuery(): void {
			if (store.query.length !== 0) {
				// Определяем тип запроса
				let searchType: string | null = null;

				switch (cardType) {
					case CardTypes.DOCUMENT_TEMPLATE:
						if (category !== undefined)
							searchType = `шаблоны | ${category}`;
						else searchType = 'шаблоны';
						break;
					case CardTypes.TOPIC_ARTICLE:
						searchType = 'статьи';
						break;
					case CardTypes.COURT_CASE:
						if (category !== undefined)
							searchType = `кейсы | ${category}`;
						else searchType = 'кейсы';
						break;
					default:
						searchType = 'поиск по базе';
				}

				// TODO: perform search
				const searchQuery: string = store.query.trim();
				console.log(`SEARCH QUERY at [${searchType}] = ${searchQuery}`);
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
