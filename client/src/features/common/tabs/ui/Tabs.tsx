import { memo, useState } from 'react';
import styles from './tabs.module.scss';

interface TabsArgumentsType {
	items: string[]; // Названия заголовков на вкладках
}

const Tabs = memo(({ items }: TabsArgumentsType): React.ReactElement => {
	const [activeTab, setActiveTab] = useState<string>(items[0]); // Активная вкладка, по умолчанию самая первая

	// Меняем активную вкладку при клике
	function handleTabClick(newActiveTab: string): void {
		setActiveTab(newActiveTab);
	}

	return (
		<>
			<div className={styles['tabs']}>
				{items.map((title: string) => (
					<p
						className={`${styles['tabs__item']} ${
							activeTab === title && styles['tabs__item--active']
						}`}
						key={title}
						onClick={() => handleTabClick(title)}
					>
						{title}
					</p>
				))}
			</div>
		</>
	);
});

export default Tabs;
