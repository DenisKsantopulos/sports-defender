import image from '@/app/ui/assets/404.png';
import { Link } from 'react-router-dom';
import Paths from '@/shared/model/data/Paths';
import useAos from '@/shared/model/hooks/useAos';
import styles from './not-found.module.scss';

function NotFound(): React.ReactElement {
	useAos();

	return (
		<section className={styles['not-found']} data-aos='zoom-in'>
			<img
				src={image}
				alt='404 Ошибка'
				title='404 Ошибка'
				loading='lazy'
				className={styles['not-found__image']}
			/>
			<h2 className={styles['not-found__title']}>Страница не найдена!</h2>
			<Link to={Paths.HOME} className={styles['not-found__link']}>
				Перейти на главную
			</Link>
		</section>
	);
}

export default NotFound;
