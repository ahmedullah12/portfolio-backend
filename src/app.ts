import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000', "https://portfolio-dashboardd.netlify.app", "https://ahmed-ullah.netlify.app"],
    credentials: true,
  }),
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

app.use(globalErrorHandler);

export default app;
