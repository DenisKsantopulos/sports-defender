import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './sidebar-item.module.scss';

interface SidebarItemArgumentsType {
	path: string;
	icon: IconDefinition;
	text: string;
	isClickable: boolean; // Если элемент не кликабельный, то при клике на него мы не будем применять стиль нажатого элемента
}

const SidebarItem = memo(
	({
		path,
		icon,
		text,
		isClickable,
	}: SidebarItemArgumentsType): React.ReactElement => {
		const location = useLocation();

		// Применить стиль выделенного элемента, если текущий URL на странице равен URL элемента
		// Для "FAQ" и "Обратная связь" выделяться будет только пункт "Главная"
		function applyStyles(): string | null {
			if (location.pathname === path && isClickable)
				return styles['menu__link--active'];
			else return null;
		}

		return (
			<Link
				to={path}
				className={`${styles['menu__link']} ${applyStyles()}`}
			>
				<FontAwesomeIcon icon={icon} />
				<p>{text}</p>
			</Link>
		);
	}
);

export default SidebarItem;
