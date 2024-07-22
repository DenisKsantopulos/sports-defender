import Document from '@/entities/Document';
import { useInfiniteSearch } from '@/shared/api/queries';
import Card from '@/widgets/common/card/ui/Card';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import NothingFound from '@/widgets/common/search/nothing-found/ui/NothingFound';
import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchParams from '@/entities/SearchParams';
import styles from './cards-list.module.scss';

function CardsList(): React.ReactElement {
	const [searchParams] = useSearchParams();
	const [searchFilters, setSearchFilters] = useState<SearchParams>({
		type: searchParams.get('type') ?? '',
		category: searchParams.get('category') ?? '',
		query: searchParams.get('query') ?? '',
	}); // Хранит поисковые параметры из URL

	const [hasMore, setHasMore] = useState<boolean>(false); // Показать/скрыть кнопку "Загрузить еще"

	const { data, isLoading, error, isValidating, setSize, size } =
		useInfiniteSearch(
			searchFilters.type,
			searchFilters.category,
			searchFilters.query
		); // Отправляем запрос через SWR на сервер с поисковыми фильтрами

	// При обновлении поисковых параметров в URL обновляем стейт поисковых параметров, который тригерит запрос на сервер через SWR
	useEffect(() => {
		setSearchFilters({
			type: searchParams.get('type') ?? '',
			category: searchParams.get('category') ?? '',
			query: searchParams.get('query') ?? '',
		});
	}, [searchParams]);

	// Проверяем есть ли еще чанки данных в infinite scroll
	useEffect(() => {
		if (!data) {
			setHasMore(false);
		} else {
			if (data[data.length - 1].length < 10) setHasMore(false);
			else setHasMore(true);
		}
	}, [data]);

	// Увеличиваем offset для infinite scrolling
	function handleLoadMoreClick(): void {
		setSize(size + 1);
	}

	if (isLoading) return <Info text='Поиск по документам...' />;

	if (error) return <Error text='Во время поиска произошла ошибка!' />;

	return (
		<div className={styles.wrapper}>
			<div className={styles['cards-list']}>
				{data && data[0].length === 0 && <NothingFound />}
				{data !== undefined &&
					data?.length > 0 &&
					data?.map((documents: Document[], index: number) => (
						<Fragment key={index}>
							{documents.map((document: Document) => (
								<Card
									key={document.id}
									id={document.id}
									type={document.type}
									title={document.title}
									size={document.size}
									downloadLink={document.download_link}
								/>
							))}
						</Fragment>
					))}
			</div>
			{isValidating && <Info text='Загрузка новых документов...' />}
			{hasMore && (
				<button
					onClick={handleLoadMoreClick}
					className={styles['cards-list__button']}
				>
					Загрузить еще
				</button>
			)}
		</div>
	);
}

export default CardsList;
