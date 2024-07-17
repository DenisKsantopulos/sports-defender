import { useStores } from '@/shared/model/hooks/useStores';
import { observer } from 'mobx-react-lite';
import styles from './survey-next.module.scss';

interface SurveyNextArgumentsType {
	nextQuestionId: number | null;
}

const SurveyNext = observer(
	({ nextQuestionId }: SurveyNextArgumentsType): React.ReactElement => {
		const { survey } = useStores(); // Текущий ID анкеты из MobX

		// Обрабатываем и ставим новый ID текущего элемента анкеты
		function handleProceedClick(): void {
			if (nextQuestionId === null) alert('Выберите вариант ответа!');
			else survey.setCurrentSurveyId(nextQuestionId);
		}

		return (
			<button
				className={styles['survey__proceed']}
				onClick={handleProceedClick}
			>
				Дальше
			</button>
		);
	}
);

export default SurveyNext;
