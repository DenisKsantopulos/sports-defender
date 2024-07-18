import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearch } from '@/shared/api/queries';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import NothingFound from '@/widgets/common/search/nothing-found/ui/NothingFound';
import Document from '@/entities/Document';
import Card from '@/widgets/common/card/ui/Card';
import styles from './cards-list.module.scss';

interface SearchParamsType {
	type: string; // Тип документа (шаблон, статья, кейс)
	category: string; // Категория документа (заявление, претензия, товары и пр.)
	query: string | null; // Сам поисковой запрос пользователя
}

function CardsList(): React.ReactElement {
	const [searchParams] = useSearchParams();
	const [searchFilters, setSearchFilters] = useState<SearchParamsType>({
		type: '',
		category: '',
		query: null,
	}); // Хранит параметры поиска для запроса по SWR

	const { data, isLoading, error } = useSearch(
		searchFilters.type,
		searchFilters.category,
		searchFilters.query
	);

	// При обновлении параметров поиска в URL обновляем их для запроса на сервер
	useEffect(() => {
		const type: string = searchParams.get('type') ?? '';
		const category: string = searchParams.get('category') ?? '';
		const query: string = searchParams.get('query') ?? '';

		if (query.length !== 0) {
			setSearchFilters({
				type,
				category,
				query,
			});
		}
	}, [searchParams]);

	if (isLoading) return <Info text='Поиск по документам...' />;

	if (error) return <Error text='Во время поиска произошла ошибка!' />;

	return (
		<div className={styles['cards-list']}>
			{data?.length == 0 && <NothingFound />}
			{data !== undefined &&
				data?.length > 0 &&
				data?.map((document: Document) => (
					<Card
						key={document.id}
						id={document.id}
						type={document.type}
						title={document.title}
						size={document.size}
						downloadLink={document.download_link}
					/>
				))}
		</div>
	);
}

export default CardsList;
