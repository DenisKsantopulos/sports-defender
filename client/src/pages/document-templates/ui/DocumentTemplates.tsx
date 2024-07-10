import TopButton from '@/features/common/top-button/ui/TopButton';
import Title from '@/widgets/common/title/ui/Title';
import useAos from '@/shared/model/hooks/useAos';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import styles from './document-templates.module.scss';

function DocumentTemplates(): React.ReactElement {
	useAos();

	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<Title title='Поиск по шаблонам документов'>
						Необходимо скачать готовый шаблон документа?
						Воспользуйтесь данным разделом для скачивания нужного
						вами документа, который поможет защитить ваши права в
						сфере защиты прав потребителей.
					</Title>
					<div
						className={styles['document-templates__filters']}
						data-aos='fade-up'
					>
						<SearchField placeholder='Введите название документа' />
						<Tabs
							items={[
								'Все категории',
								'Заявления',
								'Досудебные претензии',
								'Жалобы в Роспотребнадзор',
							]}
						/>
					</div>
				</section>
			</div>
		</>
	);
}

export default DocumentTemplates;
