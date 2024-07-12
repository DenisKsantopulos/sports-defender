import sportsman from '@/app/ui/assets/sportsman.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Paths from '@/shared/model/data/Paths';
import useAos from '@/shared/model/hooks/useAos';
import styles from './main.module.scss';

function Main(): React.ReactElement {
	useAos();

	return (
		<div className={styles.container} data-aos='fade-left'>
			<div>
				<h1 className={styles['main__title']}>
					ваши права в фитнес-индустрии
				</h1>
				<p className={styles['main__description']}>
					Возникли юридические вопросы по услугам фитнес-центров или
					спортивных товаров? Мы поможем! Пройдите анкету для готового
					решения или скачайте шаблоны документов для самостоятельной
					защиты своих прав.
				</p>
				<div className={styles['main__buttons-container']}>
					<Link
						to={Paths.SURVEY}
						className={`${styles['main__button']} ${styles['main__button-survey']}`}
					>
						Пройти Анкету
					</Link>
					<Link
						to={Paths.DOCUMENT_TEMPLATES}
						className={`${styles['main__button']} ${styles['main__button-templates']}`}
					>
						Шаблоны Документов
						<FontAwesomeIcon
							icon={faDownload}
							className={styles['main__button-templates-icon']}
						/>
					</Link>
				</div>
			</div>
			<img
				src={sportsman}
				alt='Спортивный человек'
				loading='lazy'
				className={styles['main__image']}
			/>
		</div>
	);
}

export default Main;
