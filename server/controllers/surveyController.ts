import SurveyModel from '../models/Surveys';

const getSurvey = async (req: any, res: any) => {
	try {
		const surveyId: number = req.params.id; // ID вопроса, который нужен клиенту

		// Поиск элемента в MongoDB по ID
		const survey = await SurveyModel.findOne({ id: surveyId });

		if (!survey) {
			return res
				.status(404)
				.send({ message: 'Вопрос не был найден на сервере!' });
		}

		// Отправка найденного вопрос клиенту в формате JSON
		res.json(survey);
	} catch (error) {
		res.status(500).send({ message: 'Oops, server error' });
	}
};

export { getSurvey };
