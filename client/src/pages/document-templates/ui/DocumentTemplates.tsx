import TopButton from '@/features/common/top-button/ui/TopButton';
import DocumentTemplatesTitle from '@/widgets/document-templates/title/ui/DocumentTemplatesTitle';
import DocumentTemplatesFilters from '@/widgets/document-templates/filters/ui/DocumentTemplatesFilters';
import styles from './document-templates.module.scss';

function DocumentTemplates(): React.ReactElement {
	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<DocumentTemplatesTitle />
					<DocumentTemplatesFilters />
				</section>
			</div>
		</>
	);
}

export default DocumentTemplates;
