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

const PORT: number = 3001;
const HOST: string = '0.0.0.0';

app.listen(PORT, HOST, () => {
	console.log(`Express.js server running at http://${HOST}:${PORT}/`);
});
