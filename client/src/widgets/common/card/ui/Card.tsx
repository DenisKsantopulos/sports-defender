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
import { memo } from 'react';
import styles from './card.module.scss';
import { useNavigate } from 'react-router-dom';

interface CardArgumentsType {
	type: string;
	title: string;
	fileSize: string;
	link: string;
}

// Данная карточка высвечивается в поисковом списке
// Она может содержать шаблон документа, тематическую статью или судебное дело
const Card = memo(
	({
		type,
		title,
		fileSize,
		link,
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

		return (
			<article
				className={styles.card}
				title={title}
				onClick={() => window.open(link, '_blank')}
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
						>
							<FontAwesomeIcon
								icon={faDownload}
								className={styles['card__download-icon']}
							/>
							{fileSize}
						</button>
					</div>
				</div>
			</article>
		);
	}
);

export default Card;
