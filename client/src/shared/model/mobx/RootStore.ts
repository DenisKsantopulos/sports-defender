import DocumentTemplatesTabs from '@/shared/model/mobx/stores/DocumentTemplatesTabs';
import CourtCasesTabs from '@/shared/model/mobx/stores/CourtCasesTabs';
import DocumentTemplatesSearch from '@/shared/model/mobx/stores/DocumentTemplatesSearch';
import CourtCasesSearch from '@/shared/model/mobx/stores/CourtCasesSearch';
import GlobalSearch from '@/shared/model/mobx/stores/GlobalSearch';
import TopicArticlesSearch from '@/shared/model/mobx/stores/TopicArticlesSearch';
import CurrentSurvey from '@/shared/model/mobx/stores/CurrentSurvey';
import SearchResults from '@/shared/model/mobx/stores/SearchResults';

// Содержит список всех MobX stores
class RootStore {
	// Текущий вопрос анкеты
	currentSurvey = CurrentSurvey;

	// Результаты поиска
	searchResults = SearchResults;

	// Активные вкладки на страницах поиска
	documentTemplatesTabsStore = DocumentTemplatesTabs;
	courtCasesTabsStore = CourtCasesTabs;

	// Поле поиска
	documentTemplatesSearch = DocumentTemplatesSearch;
	courtCasesSearch = CourtCasesSearch;
	globalSearch = GlobalSearch;
	topicArticlesSearch = TopicArticlesSearch;
}

export default RootStore;
