import { useSearchParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import NothingFound from '@/widgets/common/search/nothing-found/ui/NothingFound';
import Document from '@/entities/Document';
import Card from '@/widgets/common/card/ui/Card';
import { useInfiniteSearch } from '@/shared/api/queries';
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
	const [hasMore, setHasMore] = useState<boolean>(false); // Показать/скрыть кнопку "Загрузить еще"

	const { data, isLoading, error, isValidating, setSize, size } =
		useInfiniteSearch(
			searchFilters.type,
			searchFilters.category,
			searchFilters.query
		);

	// Проверяем есть ли еще чанки данных в infinite scroll
	useEffect(() => {
		if (!data) {
			setHasMore(false);
		} else {
			if (data[data.length - 1].length < 10) setHasMore(false);
			else setHasMore(true);
		}
	}, [data]);

	// При обновлении параметров поиска в URL обновляем их для запроса на сервер (используется, когда юзер меняет активную вкладку)
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
		} // Если запрос пуст в поле поиска, то очищаем список результатов
		else
			setSearchFilters({
				type,
				category,
				query: null,
			});
	}, [searchParams]);

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
