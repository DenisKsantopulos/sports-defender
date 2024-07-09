import Navbar from '@/widgets/home/navbar/ui/Navbar';
import Main from '@/widgets/home/main/ui/Main';
import Explanation from '@/widgets/home/explanation/ui/Explanation';
import FAQ from '@/widgets/home/faq/ui/FAQ';
import Footer from '@/widgets/home/footer/ui/Footer';
import TopButton from '@/features/common/top-button/ui/TopButton';
import useHashScrollIntoView from '@/shared/model/hooks/useHashScrollIntoView';
import styles from './home.module.scss';

function Home(): React.ReactElement {
	useHashScrollIntoView(); // Скролим до определенного блока на главное странице, если он прописан якорем в URL

	return (
		<>
			<TopButton />
			<div className={styles['main-container']}>
				<main id='main' className={styles['content-container']}>
					<Navbar />
					<Main />
				</main>
				<Explanation />
				<FAQ />
				<Footer />
			</div>
		</>
	);
}

export default Home;
