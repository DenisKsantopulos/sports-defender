import FaqModel from '../models/Faq';

const getFaq = async (_req: Request, res: any) => {
	const faqs = await FaqModel.find();

	res.json(faqs);
};

export { getFaq };
