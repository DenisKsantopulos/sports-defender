import { makeAutoObservable } from 'mobx';
import documentTemplatesTabTitles from '@/shared/model/data/DocumentTemplatesTabTitles';

// Хранит состояние вкладок у страницы "Шаблоны документов"
class DocumentTemplatesTabs {
	activeTab: string = documentTemplatesTabTitles[0]; // По умолчанию активная вкладка первая

	constructor() {
		makeAutoObservable(this);
	}

	setActiveTab(newActiveTab: string): void {
		this.activeTab = newActiveTab;
	}
}

export default new DocumentTemplatesTabs();
