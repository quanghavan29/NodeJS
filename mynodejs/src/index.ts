import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';

import userRouter from './routes/user.routes';
import postRouter from './routes/post.router';

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3000);
console.log('Server on port', 3000);

