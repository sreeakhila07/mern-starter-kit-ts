import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/users.route';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger';

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT);
const DB_CONN_STRING: string = process.env.DB_CONN_STRING as string;

app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url} ${req.path}`);
    next();
});

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/users', userRouter);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Define database name with fallback
const DB_NAME: string = process.env.DB_NAME as string;

mongoose.connect(DB_CONN_STRING, {
    dbName: DB_NAME
})
    .then(() => {
        console.log(`Connected to MongoDB database: ${DB_NAME}`);
        // Note: Collection names are defined in individual model schemas
        // Example: const UserSchema = new mongoose.Schema({...}, { collection: 'users' });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
