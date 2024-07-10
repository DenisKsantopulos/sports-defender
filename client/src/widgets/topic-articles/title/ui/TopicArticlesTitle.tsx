import useAos from '@/shared/model/hooks/useAos';
import styles from './topic-articles-title.module.scss';

function TopicArticlesTitle(): React.ReactElement {
	useAos();

	return (
		<div data-aos='fade-right'>
			<h2 className={styles['topic-articles__title']}>
				Тематические статьи
			</h2>
			<p className={styles['topic-articles__description']}>
				Данный раздел предназначен для чтения различных тематических
				статей, которые помогут вам при нахождении нужной юридической
				информации.
			</p>
		</div>
	);
}

export default TopicArticlesTitle;
