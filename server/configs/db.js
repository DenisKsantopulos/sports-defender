const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI ?? 'mongodb+srv://Denis:00392024@cluster0.kbanvrn.mongodb.net/defender'; // Обновляется автоматически на сервере под MongoDB Atlas URI
// mongodb+srv://Denis:00392024@cluster0.kbanvrn.mongodb.net/defender
// mongodb://localhost:27017/defender
const connectDB = async () => {
	try {
		await mongoose.connect(DB_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connection error:', error);
	}
};

module.exports = connectDB;
