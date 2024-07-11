import TopButton from '@/features/common/top-button/ui/TopButton';
import useAos from '@/shared/model/hooks/useAos';
import Title from '@/widgets/common/title/ui/Title';
import SearchField from '@/features/common/search/ui/SearchField';
import CardsList from '@/features/common/list/ui/CardsList';
import { useStores } from '@/shared/model/hooks/useStores';
import styles from './search.module.scss';

function Search(): React.ReactElement {
	const { globalSearch } = useStores();

	useAos();

	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<Title title='Поиск по всей базе'>
						Не знаете что искать? Воспользуйтесь общим поиском по
						всей базе документов Спортивного Защитника.
					</Title>
					<div
						className={styles['document-templates__filters']}
						data-aos='fade-up'
					>
						<SearchField
							store={globalSearch}
							placeholder='Искать по...'
						/>
						<CardsList />
					</div>
				</section>
			</div>
		</>
	);
}

export default Search;
