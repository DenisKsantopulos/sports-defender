const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const connectDB = require('./configs/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/', router);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send({ message: 'Internal Server Error' });
});

const PORT = process.env.APP_PORT ?? 3001; // Автоматически изменяется под порт хостинга
const HOST = process.env.APP_IP ?? '127.0.0.1'; // Автоматически изменяется под IP хостинга

app.listen(PORT, HOST, () => {
	console.log(`Server running at http://${HOST}:${PORT}/`);
});
