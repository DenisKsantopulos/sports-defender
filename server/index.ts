import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import connectDB from './configs/db';
import router from './routes/routes';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use(router);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);
	res.status(500).send({ message: 'Internal Server Error' });
});

const PORT: number = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3001; // Автоматически изменяется под порт хостинга
const HOST: string = process.env.APP_IP ?? '127.0.0.1'; // Автоматически изменяется под IP хостинга

app.listen(PORT, HOST, () => {
	console.log(`Express.js server running at http://${HOST}:${PORT}/`);
});
