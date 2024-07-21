import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import TopButton from '@/features/common/top-button/ui/TopButton';
import CardTypes from '@/shared/model/data/CardTypes';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import styles from './topic-articles.module.scss';

function TopicArticles(): React.ReactElement {
	const { topicArticlesSearch } = useStores();

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по тематическим статьям'>
						Тематические статьи предоставляют очень важную
						юридическую информацию. Данный раздел предназначен для
						поиска такого рода документов.
					</Title>
					<div className={styles['document-templates__filters']}>
						<SearchField
							cardType={CardTypes.TOPIC_ARTICLE}
							store={topicArticlesSearch}
							placeholder='Введите название статьи'
						/>
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default TopicArticles;
