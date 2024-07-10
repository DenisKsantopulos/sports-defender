import TopButton from '@/features/common/top-button/ui/TopButton';
import CourtCasesTitle from '@/widgets/court-cases/title/ui/CourtCasesTitle';
import CourtCasesFilters from '@/widgets/court-cases/filters/ui/CourtCasesFilters';
import styles from './court-cases.module.scss';

function CourtCases(): React.ReactElement {
	return (
		<>
			<TopButton />
			<div>
				<section className={styles.container}>
					<CourtCasesTitle />
					<CourtCasesFilters />
				</section>
			</div>
		</>
	);
}

export default CourtCases;
