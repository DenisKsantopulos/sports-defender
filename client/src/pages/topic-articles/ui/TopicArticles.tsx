import TopButton from '@/features/common/top-button/ui/TopButton';
import useAos from '@/shared/model/hooks/useAos';
import SearchField from '@/features/common/search/ui/SearchField';
import CardsList from '@/features/common/list/ui/CardsList';
import Title from '@/widgets/common/title/ui/Title';
import CardTypes from '@/shared/model/data/CardTypes';
import { useStores } from '@/shared/model/hooks/useStores';
import styles from './topic-articles.module.scss';

function TopicArticles(): React.ReactElement {
	const { topicArticlesSearch } = useStores();

	useAos();

	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<Title title='Поиск по тематическим статьям'>
						Тематические статьи предоставляют очень важную
						юридическую информацию. Данный раздел предназначен для
						поиска такого рода документов.
					</Title>
					<div
						className={styles['document-templates__filters']}
						data-aos='fade-up'
					>
						<SearchField
							cardType={CardTypes.TOPIC_ARTICLE}
							store={topicArticlesSearch}
							placeholder='Введите название статьи'
						/>
						<CardsList cardType={CardTypes.TOPIC_ARTICLE} />
					</div>
				</section>
			</div>
		</>
	);
}

export default TopicArticles;
