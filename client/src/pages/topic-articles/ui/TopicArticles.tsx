/* eslint-disable react-hooks/exhaustive-deps */
import CardsList from '@/features/common/list/ui/CardsList';
import SearchField from '@/features/common/search/ui/SearchField';
import TopButton from '@/features/common/top-button/ui/TopButton';
import CardTypes from '@/shared/model/data/CardTypes';
import { useStores } from '@/shared/model/hooks/useStores';
import Footer from '@/widgets/common/footer/ui/Footer';
import Title from '@/widgets/common/title/ui/Title';
import styles from './topic-articles.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const TopicArticles = observer((): React.ReactElement => {
	const { topicArticlesSearch } = useStores();

	// Инициализировать параметры поиска при загрузке страницы
	const [, setSearchParams] = useSearchParams();

	useEffect(() => {
		setSearchParams({
			type: CardTypes.TOPIC_ARTICLE,
			category: '',
			query: topicArticlesSearch.query,
		});
	}, [topicArticlesSearch.query]);

	return (
		<>
			<TopButton />
			<div className={styles.wrapper}>
				<section className={styles.container}>
					<Title title='Поиск по тематическим статьям' />
					<div className={styles['document-templates__filters']}>
						<SearchField store={topicArticlesSearch} />
						<CardsList />
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
});

export default TopicArticles;
