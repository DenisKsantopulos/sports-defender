import sportsman from '@/app/ui/assets/sportsman.png';
import Paths from '@/shared/model/data/Paths';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './main.module.scss';

function Main(): React.ReactElement {
	return (
		<div className={styles.container}>
			<div>
				<h1 className={styles['main__title']}>
					права потребителя в фитнесе
				</h1>
				<p className={styles['main__description']}>
					Возникли юридические вопросы по услугам фитнес-центров или
					по спортивным товарам? Мы поможем! Пройдите анкету или
					скачайте шаблоны документов для защиты своих прав.
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
