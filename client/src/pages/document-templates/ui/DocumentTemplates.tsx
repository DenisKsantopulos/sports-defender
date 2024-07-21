import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import Tabs from '@/features/common/tabs/ui/Tabs';
import TopButton from '@/features/common/top-button/ui/TopButton';
import CardTypes from '@/shared/model/data/CardTypes';
import documentTemplatesTabTitles from '@/shared/model/data/DocumentTemplatesTabTitles';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import { observer } from 'mobx-react-lite';
import styles from './document-templates.module.scss';

const DocumentTemplates = observer((): React.ReactElement => {
	const { documentTemplatesTabsStore, documentTemplatesSearch } = useStores();

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по шаблонам документов'>
						Необходимо скачать готовый шаблон документа?
						Воспользуйтесь данным разделом для скачивания нужного
						вами документа, который поможет защитить ваши права в
						сфере защиты прав потребителей.
					</Title>
					<div className={styles['document-templates__filters']}>
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
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
});

export default DocumentTemplates;
