import SurveyOptions from '@/features/survey/options/ui/SurveyOptions';
import { useSurveyById } from '@/shared/api/queries';
import useAos from '@/shared/model/hooks/useAos';
import SurveyHeader from '@/widgets/survey/header/ui/SurveyHeader';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import { useStores } from '@/shared/model/hooks/useStores';
import { observer } from 'mobx-react-lite';
import SurveyDocument from '@/widgets/survey/document/ui/SurveyDocument';
import SurveyReset from '@/features/survey/reset/ui/SurveyReset';
import styles from './survey.module.scss';

const Survey = observer((): React.ReactElement => {
	useAos();

	const { currentSurvey } = useStores(); // Текущий ID анкеты из MobX
	const { data, isLoading, error } = useSurveyById(currentSurvey.surveyId); // Извлекаем объект анкеты (вопрос или шаблон документа)

	return (
		<div>
			<section className={styles.container} data-aos='fade-left'>
				{isLoading && <Info text='Загрузка анкеты...' />}
				{error && (
					<Error text='При загрузке анкеты произошла ошибка! Пожалуйста, проверьте ваше интернет соединение.' />
				)}
				{data && (
					<>
						{data.text !== null && (
							<SurveyHeader title={data.text}>
								{data.note !== null ? data.note : undefined}
							</SurveyHeader>
						)}
						{data.answers !== null && (
							<SurveyOptions options={data.answers} />
						)}
						{data.documentUrl !== null && (
							<SurveyDocument link={data.documentUrl} />
						)}
						{(data.documentUrl === null && data.answers === null) ||
						data.documentUrl !== null ? (
							<SurveyReset />
						) : undefined}
					</>
				)}
			</section>
		</div>
	);
});

export default Survey;
