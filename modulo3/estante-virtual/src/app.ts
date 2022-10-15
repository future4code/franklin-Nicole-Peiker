import express from 'express';
import cors from 'cors';
import competitionRouter from './router/competitionRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', competitionRouter);

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003');
});

export default app;
