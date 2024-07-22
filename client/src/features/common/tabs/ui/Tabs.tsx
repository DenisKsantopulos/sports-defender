import { observer } from 'mobx-react-lite';
import styles from './tabs.module.scss';

interface TabsArgumentsType {
	items: string[]; // Названия заголовков на вкладках
	store: any; // MobX store хранит текущую активную вкладку
}

const Tabs = observer(
	({ items, store }: TabsArgumentsType): React.ReactElement => {
		function handleTabClick(newActiveTab: string): void {
			// Меняем активную вкладку
			store.setActiveTab(newActiveTab);
		}

		return (
			<>
				<div className={styles['tabs']}>
					{items.map((title: string) => (
						<p
							className={`${styles['tabs__item']} ${
								store.activeTab === title &&
								styles['tabs__item--active']
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
	}
);

export default Tabs;
