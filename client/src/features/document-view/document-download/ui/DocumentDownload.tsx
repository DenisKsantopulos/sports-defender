import { memo } from 'react';
import styles from './document-download.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface DocumentDownloadArgumentsType {
	downloadLink: string;
}

const DocumentDownload = memo(
	({ downloadLink }: DocumentDownloadArgumentsType): React.ReactElement => {
		// Скачать документ
		function handleDownloadClick(): void {
			window.open(downloadLink, '_blank');
		}

		return (
			<button
				className={styles['view-document__download']}
				onClick={handleDownloadClick}
			>
				Скачать документ
				<FontAwesomeIcon
					icon={faDownload}
					className={styles['view-document__download-icon']}
				/>
			</button>
		);
	}
);

export default DocumentDownload;
