import useAos from '@/shared/model/hooks/useAos';
import styles from './document-templates-title.module.scss';

function DocumentTemplatesTitle(): React.ReactElement {
	useAos();

	return (
		<div data-aos='fade-right'>
			<h2 className={styles['document-templates__title']}>
				Шаблоны Документов
			</h2>
			<p className={styles['document-templates__description']}>
				Данный раздел предназначен для скачивания нужного вами шаблона
				документа, который поможет защитить ваши права в сфере защиты
				прав потребителей.
			</p>
		</div>
	);
}

export default DocumentTemplatesTitle;
