import mongoose from 'mongoose';

const DB_URI: string =
	process.env.MONGODB_URI ?? 'mongodb://localhost:27017/defender'; // Обновляется автоматически на сервере под MongoDB Atlas URI

const connectDB = async (): Promise<void> => {
	try {
		await mongoose.connect(DB_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connection error to MongoDB:', error);
	}
};

export default connectDB;
