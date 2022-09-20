import { authenticationRouter } from './router/authenticationRouter';
import { recipeRouter } from './router/recipeRouter';
import { userRouter } from './router/userRouter';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', authenticationRouter);
app.use('/user', userRouter);
app.use('/recipe', recipeRouter);

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
