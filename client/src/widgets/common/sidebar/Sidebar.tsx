import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faSquarePollVertical,
	faFile,
	faNewspaper,
	faMagnifyingGlass,
	faGavel,
	faQuestion,
	faComment,
} from '@fortawesome/free-solid-svg-icons';
import logo from '@/app/ui/assets/logo.png';
import styles from './sidebar.module.scss';

function Sidebar(): React.ReactElement {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles['sidebar__menu']}>
				<li className={styles['menu__item']} title='Главная'>
					<FontAwesomeIcon icon={faHouse} />
					<p>Главная</p>
				</li>
				<li className={styles['menu__item']} title='Заполнить анкету'>
					<FontAwesomeIcon icon={faSquarePollVertical} />
					<p>Анкета</p>
				</li>
				<li className={styles['menu__item']} title='Шаблоны документов'>
					<FontAwesomeIcon icon={faFile} />
					<p>Шаблоны документов</p>
				</li>
				<li
					className={styles['menu__item']}
					title='Тематические статьи'
				>
					<FontAwesomeIcon icon={faNewspaper} />
					<p>Тематич. статьи</p>
				</li>
				<li className={styles['menu__item']} title='Поиск по сайту'>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<p>Поиск</p>
				</li>
				<li className={styles['menu__item']} title='Судебные кейсы'>
					<FontAwesomeIcon icon={faGavel} />
					<p>Судебные кейсы</p>
				</li>
				<li
					className={styles['menu__item']}
					title='Часто задаваемые вопросы'
				>
					<FontAwesomeIcon icon={faQuestion} />
					<p>Q&A</p>
				</li>
				<li className={styles['menu__item']} title='Обратная связь'>
					<FontAwesomeIcon icon={faComment} />
					<p>Обратная связь</p>
				</li>
			</ul>
			<img
				src={logo}
				alt='Логотип'
				title='Спортивный Защитник'
				loading='lazy'
				className={styles['sidebar__logo']}
			/>
		</aside>
	);
}

export default Sidebar;
