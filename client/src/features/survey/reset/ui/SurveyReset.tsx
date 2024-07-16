import { useStores } from '@/shared/model/hooks/useStores';
import { observer } from 'mobx-react-lite';
import styles from './survey-reset.module.scss';

const SurveyReset = observer((): React.ReactElement => {
	const { currentSurvey } = useStores(); // Текущий ID анкеты из MobX

	return (
		<button onClick={() => currentSurvey.reset()} className={styles.button}>
			Пройти анкету заново?
		</button>
	);
});

export default SurveyReset;
