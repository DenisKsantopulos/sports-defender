import logo from '@/app/ui/assets/logo-header.png';
import Paths from '@/shared/model/paths';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

function Navbar(): React.ReactElement {
	return (
		<nav className={styles.navbar}>
			<img
				src={logo}
				alt='Логотип'
				title='Спортивный Защитник'
				loading='lazy'
				className={styles['navbar__logo']}
			/>
			<ul className={styles['navbar__menu']}>
				<li className={styles['menu__list']}>
					<Link
						to={`${Paths.HOME}#faq`}
						className={styles['menu__item']}
					>
						Часто задаваемые вопросы
					</Link>
				</li>
				<li className={styles['menu__list']}>
					<Link to={Paths.SEARCH} className={styles['menu__item']}>
						Поиск
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className={styles['menu__search-icon']}
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
