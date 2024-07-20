import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './document-download.module.scss';

interface DocumentDownloadArgumentsType {
	downloadLink: string; // Ссылка на скачивание документа
	text: string; // Текст кнопки
}

const DocumentDownload = memo(
	({
		downloadLink,
		text,
	}: DocumentDownloadArgumentsType): React.ReactElement => {
		// Скачать документ/инструкцию/пр. по ссылке
		function handleDownloadClick(): void {
			window.open(downloadLink, '_blank');
		}

		return (
			<button
				className={styles['view-document__download']}
				onClick={handleDownloadClick}
			>
				{text}
				<FontAwesomeIcon
					icon={faDownload}
					className={styles['view-document__download-icon']}
				/>
			</button>
		);
	}
);

export default DocumentDownload;
