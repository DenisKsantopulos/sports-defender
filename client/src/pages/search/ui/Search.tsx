import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import TopButton from '@/features/common/top-button/ui/TopButton';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import styles from './search.module.scss';

function Search(): React.ReactElement {
	const { globalSearch } = useStores();

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по всей базе'>
						Не знаете что вам необходимо найти? Воспользуйтесь общим
						поиском по всей базе документов "Спортивного Защитника"
						от судебных кейсов до шаблонов документов.
					</Title>
					<div className={styles['document-templates__filters']}>
						<SearchField
							store={globalSearch}
							placeholder='Искать по...'
						/>
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Search;
