import DocumentsModel from '../models/Documents';

const getDocs = async (req: any, res: any) => {
	try {
		const documentId: number = req.params.id; // ID документа, который нужен клиенту

		// Поиск элемента в MongoDB по ID
		const document = await DocumentsModel.findOne({ id: documentId });

		if (!document) {
			return res.status(404).send({
				message: 'Документ не был найден на сервере!',
			});
		}

		// Отправка найденного документа клиенту в формате JSON
		res.json(document);
	} catch (error) {
		res.status(500).send({ message: 'Oops, server error' });
	}
};

export { getDocs };
