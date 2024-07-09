import image from '@/app/ui/assets/404.png';
import { Link } from 'react-router-dom';
import Paths from '@/shared/model/paths';
import styles from './not-found.module.scss';

function NotFound(): React.ReactElement {
	return (
		<section className={styles['not-found']}>
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
