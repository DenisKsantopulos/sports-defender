import CardTypes from '@/shared/model/data/CardTypes';
import {
	faDownload,
	faFile,
	faGavel,
	faNewspaper,
	faQuestion,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Paths from '@/shared/model/data/Paths';
import styles from './card.module.scss';

interface CardArgumentsType {
	id: string;
	title: string; // Заголовок документа
	type: string; // Тип документа (статья, кейс или шаблон)
	size: string; // Размер документа
	downloadLink: string; // Ссылка на скачивание в Google Docs
}

// Данная карточка высвечивается в поисковом списке
// Она может содержать шаблон документа, тематическую статью или судебное дело
const Card = memo(
	({
		id,
		title,
		type,
		size,
		downloadLink,
	}: CardArgumentsType): React.ReactElement => {
		const navigate = useNavigate();

		// Применить определенную иконку в зависимости от типа карточки
		function applyIcon(): IconDefinition {
			switch (type) {
				case CardTypes.DOCUMENT_TEMPLATE:
					return faFile;
				case CardTypes.TOPIC_ARTICLE:
					return faNewspaper;
				case CardTypes.COURT_CASE:
					return faGavel;
				default:
					return faQuestion;
			}
		}

		// Открываем документ в новом окне
		function handleOpenDocumentClick(): void {
			navigate(`${Paths.VIEW_DOCUMENT}/${id}`);
		}

		// Скачать документ
		function handleDownloadClick(
			event: MouseEvent<HTMLButtonElement>
		): void {
			event.stopPropagation();

			window.open(downloadLink, '_blank');
		}

		return (
			<article
				className={styles.card}
				title={title}
				onClick={handleOpenDocumentClick}
			>
				<div className={styles['card__content-container']}>
					<p className={styles['card__title']}>
						<FontAwesomeIcon
							icon={applyIcon()}
							className={styles['card__title-icon']}
						/>
						{title}
					</p>
					<div className={styles['card__bottom-container']}>
						<p className={styles['card__description']}>{type}</p>
						<button
							className={styles['card__download']}
							title='Скачать документ'
							onClick={handleDownloadClick}
						>
							<FontAwesomeIcon
								icon={faDownload}
								className={styles['card__download-icon']}
							/>
							{size}
						</button>
					</div>
				</div>
			</article>
		);
	}
);

export default Card;
