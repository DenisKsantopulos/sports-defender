import TopButton from '@/features/common/top-button/ui/TopButton';
import useAos from '@/shared/model/hooks/useAos';
import Title from '@/widgets/common/title/ui/Title';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import { useStores } from '@/shared/model/hooks/useStores';
import courtCasesTabTitles from '@/shared/model/data/CourtCasesTabTitles';
import CardsList from '@/features/common/list/ui/CardsList';
import CardTypes from '@/shared/model/data/CardTypes';
import { observer } from 'mobx-react-lite';
import Footer from '@/widgets/common/footer/ui/Footer';
import styles from './court-cases.module.scss';

const CourtCases = observer((): React.ReactElement => {
	const { courtCasesTabsStore, courtCasesSearch } = useStores();

	useAos();

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по судебным делам'>
						Данный раздел предназначен для поиска нужного вами
						судебного кейса, который поможет защитить ваши права в
						сфере защиты прав потребителей.
					</Title>
					<div
						className={styles['document-templates__filters']}
						data-aos='fade-up'
					>
						<SearchField
							cardType={CardTypes.COURT_CASE}
							category={courtCasesTabsStore.activeTab}
							store={courtCasesSearch}
							placeholder='Введите название дела'
						/>
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
