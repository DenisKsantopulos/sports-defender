import logo from '@/app/ui/assets/logo.png';
import SidebarItem from '@/features/common/ui/sidebar/SidebarItem';
import Paths from '@/shared/model/paths';
import {
	faComment,
	faFile,
	faGavel,
	faHouse,
	faMagnifyingGlass,
	faNewspaper,
	faQuestion,
	faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';
import styles from './sidebar.module.scss';

function Sidebar(): React.ReactElement {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles['sidebar__menu']}>
				<SidebarItem
					path={Paths.HOME}
					icon={faHouse}
					text='Главная'
					isClickable={true}
				/>
				<SidebarItem
					path={Paths.SURVEY}
					icon={faSquarePollVertical}
					text='Анкета'
					isClickable={true}
				/>
				<SidebarItem
					path={Paths.DOCUMENT_TEMPLATES}
					icon={faFile}
					text='Шаблоны документов'
					isClickable={true}
				/>
				<SidebarItem
					path={Paths.ARTICLES}
					icon={faNewspaper}
					text='Тематич. статьи'
					isClickable={true}
				/>
				<SidebarItem
					path={Paths.SEARCH}
					icon={faMagnifyingGlass}
					text='Поиск'
					isClickable={true}
				/>
				<SidebarItem
					path={Paths.COURT_CASES}
					icon={faGavel}
					text='Судебные кейсы'
					isClickable={true}
				/>
				<SidebarItem
					path={`${Paths.HOME}#faq`}
					icon={faQuestion}
					text='FAQ'
					isClickable={false}
				/>
				<SidebarItem
					path={`${Paths.HOME}#feedback`}
					icon={faComment}
					text='Обратная связь'
					isClickable={false}
				/>
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
