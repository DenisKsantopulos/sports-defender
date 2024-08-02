import mongoose from 'mongoose';

const DB_URI: string = 'mongodb+srv://Denis:00392024@cluster0.kbanvrn.mongodb.net/defender';

const connectDB = async (): Promise<void> => {
	try {
		await mongoose.connect(DB_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connection error to MongoDB:', error);
	}
};

export default connectDB;
