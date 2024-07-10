import TopButton from '@/features/common/top-button/ui/TopButton';
import useAos from '@/shared/model/hooks/useAos';
import styles from './topic-articles.module.scss';
import SearchField from '@/features/common/search/ui/SearchField';
import Title from '@/widgets/common/title/ui/Title';

function TopicArticles(): React.ReactElement {
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
						<SearchField placeholder='Введите название статьи' />
					</div>
				</section>
			</div>
		</>
	);
}

export default TopicArticles;
