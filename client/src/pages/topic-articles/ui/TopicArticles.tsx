import TopButton from '@/features/common/top-button/ui/TopButton';
import TopicArticlesTitle from '@/widgets/topic-articles/title/ui/TopicArticlesTitle';
import TopicArticlesFilters from '@/widgets/topic-articles/filters/ui/TopicArticlesFilters';
import styles from './topic-articles.module.scss';

function TopicArticles(): React.ReactElement {
	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<TopicArticlesTitle />
					<TopicArticlesFilters />
				</section>
			</div>
		</>
	);
}

export default TopicArticles;
