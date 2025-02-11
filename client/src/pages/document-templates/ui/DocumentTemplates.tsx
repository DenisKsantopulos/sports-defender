/* eslint-disable react-hooks/exhaustive-deps */
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
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const DocumentTemplates = observer((): React.ReactElement => {
	const { documentTemplatesTabsStore, documentTemplatesSearch } = useStores();

	// Инициализировать параметры поиска при загрузке страницы
	const [, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({
			type: CardTypes.DOCUMENT_TEMPLATE,
			category: documentTemplatesTabsStore.activeTab,
			query: documentTemplatesSearch.query,
		});
	}, [documentTemplatesTabsStore.activeTab, documentTemplatesSearch.query]);

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по шаблонам документов' />
					<div className={styles['document-templates__filters']}>
						<SearchField store={documentTemplatesSearch} />
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
