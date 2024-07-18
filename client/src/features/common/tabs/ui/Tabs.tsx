import { observer } from 'mobx-react-lite';
import styles from './tabs.module.scss';
import { useSearchParams } from 'react-router-dom';

interface TabsArgumentsType {
	items: string[]; // Названия заголовков на вкладках
	store: any; // MobX store хранит текущую активную вкладку
}

const Tabs = observer(
	({ items, store }: TabsArgumentsType): React.ReactElement => {
		const [searchParams, setSearchParams] = useSearchParams();

		function handleTabClick(newActiveTab: string): void {
			// Меняем активную вкладку
			store.setActiveTab(newActiveTab);

			// Обновляем существующие параметры поиска если есть параметр query
			const query: string | null = searchParams.get('query');

			if (query && query.length !== 0) {
				const type: string = searchParams.get('type') ?? '';

				setSearchParams({
					type: type,
					category: newActiveTab,
					query: query,
				});
			}
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
