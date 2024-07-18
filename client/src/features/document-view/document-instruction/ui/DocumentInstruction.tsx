import { memo, useState } from 'react';
import styles from './document-instruction.module.scss';

interface DocumentInstructionArgumentsType {
	link: string; // Ссылка на просмотр инструкции для шаблона документа
}

const DocumentInstruction = memo(
	({ link }: DocumentInstructionArgumentsType): React.ReactElement => {
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
				</button>
				<iframe
					src={`${link}?&rm=minimal&embedded=true`}
					className={`${styles['view-document__frame']} ${
						isOpen && styles['view-document__frame--active']
					}`}
				></iframe>
			</div>
		);
	}
);

export default DocumentInstruction;
