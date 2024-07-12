import SurveyHeader from '@/widgets/survey/header/ui/SurveyHeader';
import SurveyOptions from '@/features/survey/options/ui/SurveyOptions';
import useAos from '@/shared/model/hooks/useAos';
import styles from './survey.module.scss';

function Survey(): React.ReactElement {
	useAos();

	return (
		<div>
			<section className={styles.container} data-aos='fade-left'>
				<SurveyHeader title='Суть вопроса?'>
					Рандомный текст. Рандомный текст.Рандомный текст. Рандомный
					текст. Рандомный текст. Рандомный текст. Рандомный текст.
					Рандомный текст. Рандомный текст. Рандомный текст. Рандомный
					текст. Рандомный текст. Рандомный текст.
				</SurveyHeader>
				<SurveyOptions
					options={[
						'Вариант ответа 1',
						'Вариант ответа 2',
						'Вариант ответа 3',
					]}
				/>
			</section>
		</div>
	);
}

export default Survey;
