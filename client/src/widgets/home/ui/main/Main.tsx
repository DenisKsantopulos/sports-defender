import sportsman from '@/app/ui/assets/sportsman.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './main.module.scss';

function Main(): React.ReactElement {
	return (
		<div className={styles.container}>
			<div>
				<h1 className={styles['main__title']}>
					ваши права в фитнес-индустрии:{' '}
					<mark>решим любые проблемы !</mark>
				</h1>
				<p className={styles['main__description']}>
					Возникли юридические вопросы по услугам фитнес-центров или
					спортивных товаров? Мы поможем! Пройдите анкету для готового
					решения или скачайте шаблоны документов для самостоятельной
					защиты своих прав.
				</p>
				<div className={styles['main__buttons-container']}>
					<Link to='/survey' className={styles['main__button']}>
						Пройти Анкету
					</Link>
					<Link
						to='/document-templates'
						className={styles['main__button']}
					>
						Шаблоны Документов
						<FontAwesomeIcon
							icon={faDownload}
							className={styles['main__button-icon']}
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
