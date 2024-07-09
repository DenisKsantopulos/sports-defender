import Paths from '@/shared/model/data/Paths';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

function Footer(): React.ReactElement {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles['footer__form-container']}>
					<div>
						<h3 id='feedback' className={styles['footer__title']}>
							Остались сомнения?
						</h3>
						<p className={styles['footer__description']}>
							Свяжитесь с нами через форму ниже, и мы поможем вам
							разобраться.
						</p>
					</div>
					<form action='#' className={styles['footer__form']}>
						<div className={styles['form__container']}>
							<input
								type='text'
								name='username'
								placeholder='Как Вас зовут?'
								className={styles['form__username']}
							/>
							<input
								type='email'
								name='email'
								placeholder='Введите адрес электронной почты'
								className={styles['form__email']}
							/>
						</div>
						<div className={styles['form__container-message']}>
							<textarea
								name='message'
								placeholder='Опишите суть проблемы...'
								className={styles['form__message']}
							></textarea>
						</div>
						<input
							type='submit'
							value='Отправить'
							className={styles['form__submit']}
						/>
					</form>
				</div>
				<div className={styles['footer__menu-container']}>
					<ul className={styles['footer__menu']}>
						<li className={styles['menu__list']}>
							<Link
								to={Paths.SURVEY}
								className={styles['menu__item']}
							>
								Заполнить Анкету
							</Link>
						</li>
						<li className={styles['menu__list']}>
							<Link
								to={Paths.DOCUMENT_TEMPLATES}
								className={styles['menu__item']}
							>
								Скачать Шаблоны Документов
							</Link>
						</li>
						<li className={styles['menu__list']}>
							<Link
								to={Paths.ARTICLES}
								className={styles['menu__item']}
							>
								Тематические Статьи
							</Link>
						</li>
					</ul>
					<ul className={styles['footer__menu']}>
						<li className={styles['menu__list']}>
							<Link
								to={Paths.SEARCH}
								className={styles['menu__item']}
							>
								Поиск По Сайту
							</Link>
						</li>
						<li className={styles['menu__list']}>
							<Link
								to={Paths.COURT_CASES}
								className={styles['menu__item']}
							>
								Судебный Кейсы
							</Link>
						</li>
						<li className={styles['menu__list']}>
							<Link
								to={`${Paths.HOME}#faq`}
								className={styles['menu__item']}
							>
								Часто задаваемые вопросы
							</Link>
						</li>
					</ul>
				</div>
				<p className={styles['footer__commercial']}>
					&copy; 2024 Спортивный Защитник
				</p>
			</div>
		</footer>
	);
}

export default Footer;
