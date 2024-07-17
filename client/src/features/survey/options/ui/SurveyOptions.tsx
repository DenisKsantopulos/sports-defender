import { Answer } from '@/entities/Survey';
import SurveyBack from '@/features/survey/actions/back/ui/SurveyBack';
import SurveyNext from '@/features/survey/actions/next/ui/SurveyNext';
import SurveyReset from '@/features/survey/actions/reset/ui/SurveyReset';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStores } from '@/shared/model/hooks/useStores';
import styles from './survey-options.module.scss';

interface SurveyOptionsArgumentsType {
	options: Answer[] | null; // Все возможные варианты ответа на вопрос анкеты
	shouldHaveResetButton: boolean; // Если пользователь дошел до конца анкеты, то появляется кнопка "Начать заново"
}

const SurveyOptions = observer(
	({
		options,
		shouldHaveResetButton,
	}: SurveyOptionsArgumentsType): React.ReactElement => {
		const [nextQuestionId, setNextQuestionId] = useState<number | null>(
			null
		); // Хранит ID следующего вопроса

		const { survey } = useStores();

		return (
			<div className={styles['survey__options']}>
				{options &&
					options.map((option: Answer) => (
						<article
							className={styles['options__item']}
							key={option.id}
							onClick={() =>
								setNextQuestionId(option.nextQuestionId)
							}
						>
							<input
								type='radio'
								id={`${option.id}-ID`}
								name='survey-options'
								value={option.text}
								className={styles['options__radio-button']}
								checked={
									nextQuestionId === option.nextQuestionId
								}
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
				<div className={styles['survey__actions']}>
					{shouldHaveResetButton && <SurveyReset />}
					{options && <SurveyNext nextQuestionId={nextQuestionId} />}
					{survey.previousSurveyIds.length !== 0 && <SurveyBack />}
				</div>
			</div>
		);
	}
);

export default SurveyOptions;
