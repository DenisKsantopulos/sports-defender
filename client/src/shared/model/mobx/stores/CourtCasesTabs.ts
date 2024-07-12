import { makeAutoObservable } from 'mobx';
import courtCasesTabTitles from '@/shared/model/data/CourtCasesTabTitles';

// Хранит состояние вкладок у страницы "Судебные кейсы"
class CourtCasesTabs {
	activeTab: string = courtCasesTabTitles[0]; // По умолчанию активная вкладка первая

	constructor() {
		makeAutoObservable(this);
	}

	setActiveTab(newActiveTab: string): void {
		this.activeTab = newActiveTab;
	}
}

export default new CourtCasesTabs();
