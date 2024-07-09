import Navbar from '@/widgets/home/ui/navbar/Navbar';
import Main from '@/widgets/home/ui/main/Main';
import Explanation from '@/widgets/home/ui/explanation/Explanation';
import FAQ from '@/widgets/home/ui/faq/FAQ';
import Footer from '@/widgets/home/ui/footer/Footer';
import TopButton from '@/features/common/ui/top-button/TopButton';
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
