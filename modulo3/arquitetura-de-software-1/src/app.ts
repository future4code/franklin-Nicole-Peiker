import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo, Server } from 'net'

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

export default app