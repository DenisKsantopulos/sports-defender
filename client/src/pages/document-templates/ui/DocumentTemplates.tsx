import TopButton from '@/features/common/top-button/ui/TopButton';
import Title from '@/widgets/common/title/ui/Title';
import useAos from '@/shared/model/hooks/useAos';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import CardsList from '@/features/common/list/ui/CardsList';
import { useStores } from '@/shared/model/hooks/useStores';
import documentTemplatesTabTitles from '@/shared/model/data/DocumentTemplatesTabTitles';
import CardTypes from '@/shared/model/data/CardTypes';
import { observer } from 'mobx-react-lite';
import styles from './document-templates.module.scss';

const DocumentTemplates = observer((): React.ReactElement => {
	const { documentTemplatesTabsStore, documentTemplatesSearch } = useStores();

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
						<SearchField
							cardType={CardTypes.DOCUMENT_TEMPLATE}
							category={documentTemplatesTabsStore.activeTab}
							store={documentTemplatesSearch}
							placeholder='Введите название документа'
						/>
						<Tabs
							items={documentTemplatesTabTitles}
							store={documentTemplatesTabsStore}
						/>
						<CardsList
							cardType={CardTypes.DOCUMENT_TEMPLATE}
							category={documentTemplatesTabsStore.activeTab}
						/>
					</div>
				</section>
			</div>
		</>
	);
});

export default DocumentTemplates;
