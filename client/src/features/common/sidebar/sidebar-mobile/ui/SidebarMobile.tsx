import Paths from '@/shared/model/data/Paths';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import smallLogo from '@/app/ui/assets/logo.png';
import styles from './sidebar-mobile.module.scss';

function SidebarMobile(): React.ReactElement {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const location = useLocation();

	// Применить стиль выделенного элемента, если текущий URL на странице равен URL элемента
	// Для "FAQ" и "Обратная связь" выделяться будет только пункт "Главная"
	function applyStyles(path: string, isClickable: boolean): string | null {
		if (location.pathname === path && isClickable)
			return styles['sidebar-mobile__link--active'];
		else return null;
	}

	return (
		<>
			<FontAwesomeIcon
				icon={faChevronRight}
				className={styles['sidebar__open-icon']}
				onClick={() => setIsMenuOpen(true)}
			/>
			<div
				className={`${styles['sidebar-mobile__close-container']} ${
					isMenuOpen &&
					styles['sidebar-mobile__close-container--active']
				}`}
				onClick={() => setIsMenuOpen(false)}
			>
				<div className={styles['sidebar-mobile__container']}>
					<ul className={styles['sidebar-mobile__menu']}>
						<div
							className={styles['sidebar-mobile__logo-container']}
						>
							<Link to={Paths.HOME}>
								<img
									src={smallLogo}
									alt='Логотип'
									loading='lazy'
									className={styles['sidebar-mobile__logo']}
								/>
							</Link>
						</div>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.HOME}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(Paths.HOME, true)}`}
							>
								Главная
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.SURVEY}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(Paths.SURVEY, true)}`}
							>
								Анкета
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.DOCUMENT_TEMPLATES}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(
									Paths.DOCUMENT_TEMPLATES,
									true
								)}`}
							>
								Шаблоны документов
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.TOPIC_ARTICLES}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(Paths.TOPIC_ARTICLES, true)}`}
							>
								Тематические статьи
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.SEARCH}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(Paths.SEARCH, true)}`}
							>
								Поиск по всем документам
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.COURT_CASES}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(Paths.COURT_CASES, true)}`}
							>
								Судебные кейсы
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={`${Paths.HOME}#faq`}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(`${Paths.HOME}#faq`, false)}`}
							>
								Часто задаваемые вопросы
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={`${Paths.HOME}#feedback`}
								className={`${
									styles['sidebar-mobile__link']
								} ${applyStyles(
									`${Paths.HOME}#feedback`,
									false
								)}`}
							>
								Обратная связь
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default SidebarMobile;
