import SurveyHeader from '@/widgets/survey/header/ui/SurveyHeader';
import SurveyOptions from '@/widgets/survey/options/ui/SurveyOptions';
import useAos from '@/shared/model/hooks/useAos';
import styles from './survey.module.scss';

function Survey(): React.ReactElement {
	useAos();

	return (
		<div>
			<section className={styles.container} data-aos='fade-left'>
				<SurveyHeader />
				<SurveyOptions />
			</section>
		</div>
	);
}

export default Survey;
