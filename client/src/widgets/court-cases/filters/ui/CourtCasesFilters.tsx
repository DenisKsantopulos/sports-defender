import useAos from '@/shared/model/hooks/useAos';
import CourtCasesSearch from '@/widgets/court-cases/search/ui/CourtCasesSearch';
import CourtCasesTabs from '@/widgets/court-cases/tabs/ui/CourtCasesTabs';
import styles from './court-cases-filters.module.scss';

function CourtCasesFilters(): React.ReactElement {
	useAos();

	return (
		<div className={styles['court-cases__filters']} data-aos='fade-up'>
			<CourtCasesSearch />
			<CourtCasesTabs />
		</div>
	);
}

export default CourtCasesFilters;
