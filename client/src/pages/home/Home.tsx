import Navbar from '@/widgets/home/navbar/Navbar';
import Main from '@/widgets/home/main/Main';
import styles from './home.module.scss';

function Home(): React.ReactElement {
	return (
		<div className={styles['main-container']}>
			<main id='main' className={styles['content-container']}>
				<Navbar />
				<Main />
			</main>
			<section className={styles['content-container']}>
				{/* Other containers */}
			</section>
		</div>
	);
}

export default Home;
