import { observer } from 'mobx-react-lite';
import { useStores } from '@/shared/model/hooks/useStores';
import styles from './survey-back.module.scss';

const SurveyBack = observer((): React.ReactElement => {
	const { survey } = useStores(); // Массив из ID предыдущих вопросов анкеты

	return (
		<button
			className={styles['survey__back']}
			onClick={() => survey.goToPreviousSurveyId()}
		>
			Назад
		</button>
	);
});

export default SurveyBack;
