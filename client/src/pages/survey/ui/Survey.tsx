import SurveyOptions from '@/features/survey/options/ui/SurveyOptions';
import { useSurveyById } from '@/shared/api/queries';
import useAos from '@/shared/model/hooks/useAos';
import { useStores } from '@/shared/model/hooks/useStores';
import Error from '@/widgets/common/fetch-status/error/ui/Error';
import Info from '@/widgets/common/fetch-status/info/ui/Info';
import SurveyDocument from '@/widgets/survey/document/ui/SurveyDocument';
import SurveyHeader from '@/widgets/survey/header/ui/SurveyHeader';
import { observer } from 'mobx-react-lite';
import Footer from '@/widgets/common/footer/ui/Footer';
import styles from './survey.module.scss';

const Survey = observer((): React.ReactElement => {
	useAos();

	const { survey } = useStores(); // Текущий ID анкеты из MobX
	const { data, isLoading, error } = useSurveyById(survey.currentSurveyId); // Извлекаем объект анкеты (вопрос или шаблон документа)

	return (
		<div className={styles.wrapper}>
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
						{data.solutionDocumentId !== null && (
							<SurveyDocument
								documentId={data.solutionDocumentId}
							/>
						)}
						<SurveyOptions
							key={survey.currentSurveyId}
							options={
								data.answers !== null ? data.answers : null
							}
							shouldHaveResetButton={
								(data.solutionDocumentId === null &&
									data.answers === null) ||
								data.solutionDocumentId !== null
							}
						/>
					</>
				)}
			</section>
			<Footer />
		</div>
	);
});

export default Survey;
