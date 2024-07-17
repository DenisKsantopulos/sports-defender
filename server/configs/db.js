const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/defender');
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connection error:', error);
	}
};

module.exports = connectDB;
