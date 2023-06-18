import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

// useing cors
app.use(cors());

// eslint-disable-next-line no-console
console.log(app.get('env'));

// useing parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1', routes);

// test route
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   //  throw new ApiError(401, "Ore Baba Error")
// });

// Global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    statusCode: 404,
    status: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;
