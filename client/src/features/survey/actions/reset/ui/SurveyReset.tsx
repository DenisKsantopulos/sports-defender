import { useStores } from '@/shared/model/hooks/useStores';
import { observer } from 'mobx-react-lite';
import styles from './survey-reset.module.scss';

const SurveyReset = observer((): React.ReactElement => {
	const { survey } = useStores(); // Текущий ID анкеты из MobX

	return (
		<button
			onClick={() => survey.resetSurvey()}
			className={styles['survey__reset']}
		>
			Пройти анкету заново
		</button>
	);
});

export default SurveyReset;
