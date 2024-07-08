import Navbar from '@/widgets/home/ui/navbar/Navbar';
import Main from '@/widgets/home/ui/main/Main';
import Explanation from '@/widgets/home/ui/explanation/Explanation';
import FAQ from '@/widgets/home/ui/faq/FAQ';
import Footer from '@/widgets/home/ui/footer/Footer';
import styles from './home.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home(): React.ReactElement {
	const location = useLocation();

	// Скролим до определенного блока на главное странице, если он прописан якорем в URL
	useEffect(() => {
		if (location.hash) {
			const element: HTMLElement = document.getElementById(
				location.hash.substring(1)
			) as HTMLElement;

			element.scrollIntoView(true);
		}
	}, [location]);

	return (
		<div className={styles['main-container']}>
			<main id='main' className={styles['content-container']}>
				<Navbar />
				<Main />
			</main>
			<Explanation />
			<FAQ />
			<Footer />
		</div>
	);
}

export default Home;
