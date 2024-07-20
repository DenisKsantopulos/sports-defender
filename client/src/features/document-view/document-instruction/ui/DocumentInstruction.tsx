import { memo, useState } from 'react';
import DocumentDownload from '@/features/document-view/document-download/ui/DocumentDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './document-instruction.module.scss';

interface DocumentInstructionArgumentsType {
	link: string; // Ссылка на просмотр инструкции для шаблона документа
	downloadLink: string; // Ссылка на скачивание инструкции для шаблона документа
}

const DocumentInstruction = memo(
	({
		link,
		downloadLink,
	}: DocumentInstructionArgumentsType): React.ReactElement => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		function handleToggleClick(): void {
			setIsOpen(!isOpen);
		}

		return (
			<div className={styles['view-document__accordion']}>
				<button
					className={styles['view-document__button']}
					onClick={handleToggleClick}
				>
					{isOpen ? 'Закрыть' : 'Открыть'} инструкцию по заполнению
					шаблона
					<FontAwesomeIcon
						icon={isOpen ? faChevronUp : faChevronDown}
						className={styles['view-document__button-icon']}
					/>
				</button>
				<div
					className={`${styles['view-document__content']} ${
						isOpen && styles['view-document__content--active']
					}`}
				>
					<DocumentDownload
						downloadLink={downloadLink}
						text='Скачать инструкцию'
					/>
					<iframe
						src={`${link}?&rm=minimal&embedded=true`}
						className={styles['view-document__frame']}
					></iframe>
				</div>
			</div>
		);
	}
);

export default DocumentInstruction;
