import Paths from '@/shared/model/data/Paths';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar-mobile.module.scss';

function SidebarMobile(): React.ReactElement {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.HOME}
								className={styles['sidebar-mobile__link']}
							>
								Главная
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.SURVEY}
								className={styles['sidebar-mobile__link']}
							>
								Анкета
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.DOCUMENT_TEMPLATES}
								className={styles['sidebar-mobile__link']}
							>
								Шаблоны документов
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.TOPIC_ARTICLES}
								className={styles['sidebar-mobile__link']}
							>
								Тематические статьи
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.SEARCH}
								className={styles['sidebar-mobile__link']}
							>
								Поиск по всем документам
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={Paths.COURT_CASES}
								className={styles['sidebar-mobile__link']}
							>
								Судебные кейсы
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={`${Paths.HOME}#faq`}
								className={styles['sidebar-mobile__link']}
							>
								Часто задаваемые вопросы
							</Link>
						</li>
						<li className={styles['sidebar-mobile__item']}>
							<Link
								to={`${Paths.HOME}#feedback`}
								className={styles['sidebar-mobile__link']}
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
