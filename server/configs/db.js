const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/defender'; // Обновляется автоматически на сервере под MongoDB Atlas URI

const connectDB = async () => {
	try {
		await mongoose.connect(DB_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connection error:', error);
	}
};

module.exports = connectDB;
