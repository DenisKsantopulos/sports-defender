import useAos from '@/shared/model/hooks/useAos';
import DocumentTemplatesSearch from '@/widgets/document-templates/search/ui/DocumentTemplatesSearch';
import DocumentTemplatesTabs from '@/widgets/document-templates/tabs/ui/DocumentTemplatesTabs';
import styles from './document-templates-filters.module.scss';

function DocumentTemplatesFilters(): React.ReactElement {
	useAos();

	return (
		<div
			className={styles['document-templates__filters']}
			data-aos='fade-up'
		>
			<DocumentTemplatesSearch />
			<DocumentTemplatesTabs />
		</div>
	);
}

export default DocumentTemplatesFilters;
