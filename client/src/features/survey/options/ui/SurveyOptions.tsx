import { Answer } from '@/entities/Survey';
import { useStores } from '@/shared/model/hooks/useStores';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import styles from './survey-options.module.scss';

interface SurveyOptionsArgumentsType {
	options: Answer[];
}

const SurveyOptions = observer(
	({ options }: SurveyOptionsArgumentsType): React.ReactElement => {
		const [nextQuestionId, setNextQuestionId] = useState<number | null>(
			null
		); // Хранит ID следующего вопроса

		const { currentSurvey } = useStores(); // Текущий ID анкеты из MobX

		// Обрабатываем и ставим новый ID текущего элемента анкеты
		function handleProceedClick(): void {
			if (nextQuestionId === null) alert('Выберите вариант ответа!');
			else currentSurvey.setSurveyId(nextQuestionId);
		}

		return (
			<div className={styles['survey__options']}>
				{options.map((option: Answer) => (
					<article
						className={styles['options__item']}
						key={option.id}
						onClick={() => setNextQuestionId(option.nextQuestionId)}
					>
						<input
							type='radio'
							id={`${option.id}-ID`}
							name='survey-options'
							value={option.text}
							className={styles['options__radio-button']}
							checked={nextQuestionId === option.nextQuestionId}
							onChange={() =>
								setNextQuestionId(option.nextQuestionId)
							}
						/>
						<label
							htmlFor={`${option.id}-ID`}
							className={styles['options__label']}
						>
							{option.text}
						</label>
					</article>
				))}
				<button
					className={styles['survey__proceed']}
					onClick={handleProceedClick}
				>
					Дальше
				</button>
			</div>
		);
	}
);

export default SurveyOptions;
