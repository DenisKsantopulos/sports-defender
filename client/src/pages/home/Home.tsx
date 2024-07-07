import Navbar from '@/widgets/home/navbar/Navbar';
import Main from '@/widgets/home/main/Main';
import Explanation from '@/widgets/home/explanation/Explanation';
import styles from './home.module.scss';

function Home(): React.ReactElement {
	return (
		<div className={styles['main-container']}>
			<main id='main' className={styles['content-container']}>
				<Navbar />
				<Main />
			</main>
			<Explanation />
		</div>
	);
}

export default Home;
