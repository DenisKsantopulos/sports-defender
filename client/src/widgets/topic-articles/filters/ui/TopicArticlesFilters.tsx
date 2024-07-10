import useAos from '@/shared/model/hooks/useAos';
import TopicArticlesSearch from '@/widgets/topic-articles/search/ui/TopicArticlesSearch';
import styles from './topic-articles-filters.module.scss';

function TopicArticlesFilters(): React.ReactElement {
	useAos();

	return (
		<div className={styles['topic-articles__filters']} data-aos='fade-up'>
			<TopicArticlesSearch />
		</div>
	);
}

export default TopicArticlesFilters;
