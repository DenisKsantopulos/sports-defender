import TopButton from '@/features/common/top-button/ui/TopButton';
import useAos from '@/shared/model/hooks/useAos';
import Title from '@/widgets/common/title/ui/Title';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import styles from './court-cases.module.scss';

function CourtCases(): React.ReactElement {
	useAos();

	return (
		<>
			<TopButton />
			<div>
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
						<SearchField placeholder='Введите название дела' />
						<Tabs items={['Все категории', 'Товары', 'Услуги']} />
					</div>
				</section>
			</div>
		</>
	);
}

export default CourtCases;
