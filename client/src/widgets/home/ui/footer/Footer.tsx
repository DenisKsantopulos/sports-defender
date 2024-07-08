import styles from './footer.module.scss';

function Footer(): React.ReactElement {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles['footer__form-container']}>
					<div>
						<h3 className={styles['footer__title']}>
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
						<textarea
							name='message'
							placeholder='Опишите суть проблемы...'
							className={styles['form__message']}
						></textarea>
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
							<a className={styles['menu__item']}>Главная</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Заполнить Анкету
							</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Скачать Шаблоны Документов
							</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Тематические Статьи
							</a>
						</li>
					</ul>
					<ul className={styles['footer__menu']}>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Поиск По Сайту
							</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Судебный Кейсы
							</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Часто задаваемые вопросы
							</a>
						</li>
						<li className={styles['menu__list']}>
							<a className={styles['menu__item']}>
								Обратная Связь
							</a>
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
