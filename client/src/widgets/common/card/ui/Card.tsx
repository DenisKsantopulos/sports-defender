import cardImage from '@/app/ui/assets/card-image.png';
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

interface CardArgumentsType {
	cardType: CardTypes;
	title: string;
	fileSize: number;
}

// Данная карточка высвечивается в поисковом списке
// Она может содержать шаблон документа, тематическую статью или судебное дело
const Card = memo(
	({ cardType, title, fileSize }: CardArgumentsType): React.ReactElement => {
		// Применить определенную иконку в зависимости от типа карточки
		function applyIcon(): IconDefinition {
			switch (cardType) {
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
			<article className={styles.card} title={title}>
				<img
					src={cardImage}
					alt='Заголовок карточки'
					loading='lazy'
					className={styles['card__image']}
				/>
				<div className={styles['card__content-container']}>
					<p className={styles['card__title']}>
						<FontAwesomeIcon
							icon={applyIcon()}
							className={styles['card__title-icon']}
						/>
						{title}
					</p>
					<div className={styles['card__bottom-container']}>
						<p className={styles['card__description']}>
							{cardType}
						</p>
						<button
							className={styles['card__download']}
							title='Скачать документ'
						>
							<FontAwesomeIcon
								icon={faDownload}
								className={styles['card__download-icon']}
							/>
							{fileSize} MB
						</button>
					</div>
				</div>
			</article>
		);
	}
);

export default Card;
