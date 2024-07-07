import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '@/app/ui/assets/logo-header.png';
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
				<li>
					<a className={styles['menu__qa']}>
						Часто задаваемые вопросы
					</a>
				</li>
				<li>
					<Link to='/search' className={styles['menu__search']}>
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
