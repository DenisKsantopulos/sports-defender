import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema({
	id: Number,
	question: String,
	answer: String,
});

const FaqModel = mongoose.model('faq', FaqSchema);

export default FaqModel;
