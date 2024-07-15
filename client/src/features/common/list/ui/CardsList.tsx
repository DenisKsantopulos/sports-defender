import { observer } from 'mobx-react-lite';
import CardTypes from '@/shared/model/data/CardTypes';
import NothingFound from '@/widgets/common/search/nothing-found/ui/NothingFound';
import Card from '@/widgets/common/card/ui/Card';
import styles from './cards-list.module.scss';

interface CardListArgumentsType {
	cardType?: CardTypes; // Если нет типа карточки, значит представлен список карточек всех типов
	category?: string; // Если нет категории, значит нет вкладок
}

const CardsList = observer(
	({ cardType, category }: CardListArgumentsType): React.ReactElement => {
		// Определяет какой тип документа будет отображаться (шаблон, статья, кейс) и из какой категории
		function determineCardType(): string {
			switch (cardType) {
				case CardTypes.DOCUMENT_TEMPLATE:
					if (category !== undefined) return category;
					return 'шаблоны';
				case CardTypes.TOPIC_ARTICLE:
					return 'статьи';
				case CardTypes.COURT_CASE:
					if (category !== undefined) return category;
					return 'кейсы';
				default:
					return 'поиск по базе';
			}
		}

		return (
			<div className={styles['cards-list']}>
				{/* <p style={{ fontStyle: 'italic' }}>{determineCardType()}</p> */}
				{/* <NothingFound /> */}
				<Card
					cardType={CardTypes.DOCUMENT_TEMPLATE}
					title='Название шаблона документа'
					fileSize={2.1}
				/>
				<Card
					cardType={CardTypes.TOPIC_ARTICLE}
					title='Название тематической статьи'
					fileSize={1.8}
				/>
				<Card
					cardType={CardTypes.COURT_CASE}
					title='Название судебного кейса'
					fileSize={1.0}
				/>
				<Card
					cardType={CardTypes.DOCUMENT_TEMPLATE}
					title='Название шаблона документа'
					fileSize={3.9}
				/>
			</div>
		);
	}
);

export default CardsList;
