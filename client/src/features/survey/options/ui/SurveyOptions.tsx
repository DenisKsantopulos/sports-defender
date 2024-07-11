import { memo, useState } from 'react';
import styles from './survey-options.module.scss';

interface SurveyOptionsArgumentsType {
	options: string[];
}

const SurveyOptions = memo(
	({ options }: SurveyOptionsArgumentsType): React.ReactElement => {
		const [currentOption, setCurrentOption] = useState<string | null>(null); // По умолчанию нет выбранного ответа

		// Обрабатываем и отправляем ответ на сервер
		// TODO: send answer to server
		function handleProceedClick(): void {
			if (currentOption === null) alert('Выберите вариант ответа!');
			else console.log(`SURVEY ANSWER = ${currentOption}`);
		}

		return (
			<div className={styles['survey__options']}>
				{options.map((option: string, index: number) => (
					<article
						className={styles['options__item']}
						key={index}
						onClick={() => setCurrentOption(option)}
					>
						<input
							type='radio'
							id={`${index}-ID`}
							name='survey-options'
							value={option}
							className={styles['options__radio-button']}
							checked={currentOption === option}
							onChange={() => setCurrentOption(option)}
						/>
						<label
							htmlFor={`${index}-ID`}
							className={styles['options__label']}
						>
							{option}
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
