/* eslint-disable react-hooks/exhaustive-deps */
import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import TopButton from '@/features/common/top-button/ui/TopButton';
import CardTypes from '@/shared/model/data/CardTypes';
import courtCasesTabTitles from '@/shared/model/data/CourtCasesTabTitles';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import { observer } from 'mobx-react-lite';
import styles from './court-cases.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const CourtCases = observer((): React.ReactElement => {
	const { courtCasesTabsStore, courtCasesSearch } = useStores();

	// Инициализировать параметры поиска при загрузке страницы
	const [, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({
			type: CardTypes.COURT_CASE,
			category: courtCasesTabsStore.activeTab,
			query: courtCasesSearch.query,
		});
	}, [courtCasesTabsStore.activeTab, courtCasesSearch.query]);

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по судебным кейсам' />
					<div className={styles['document-templates__filters']}>
						<SearchField store={courtCasesSearch} />
						<Tabs
							items={courtCasesTabTitles}
							store={courtCasesTabsStore}
						/>
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
});

export default CourtCases;
