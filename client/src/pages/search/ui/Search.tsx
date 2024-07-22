/* eslint-disable react-hooks/exhaustive-deps */
import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import TopButton from '@/features/common/top-button/ui/TopButton';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import styles from './search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const Search = observer((): React.ReactElement => {
	const { globalSearch } = useStores();

	// Инициализировать параметры поиска при загрузке страницы
	const [, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({
			type: '',
			category: '',
			query: globalSearch.query,
		});
	}, [globalSearch.query]);

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по всем документам' />
					<div className={styles['document-templates__filters']}>
						<SearchField store={globalSearch} />
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
});

export default Search;
