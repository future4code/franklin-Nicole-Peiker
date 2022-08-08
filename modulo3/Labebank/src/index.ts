import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express( ) 

app.use(express.json( )) 
app.use(cors( )) 

app.get('saldo',(req: Request, res: Response)=> {
  // const token = req.headers.authorization
  const balance = Number(req.data.balance)
  res.status(200).send(`Seu saldo é ${balance}`)
})

app.post('/criarconta', (req: Request, res: Response) => {
  const client = req.body
  //const account = []
  //const searchClient = account.filter(client => client.cpf === cpf)
  // if(searchClient){
  //   res.status(409).send({message:'Usuário já cadastrado'})
  // }else{
  //   res.status(201).send({message:'Conta criada com sucesso'})
  // }
})

app.get('/deposito',(req: Request, res: Response) => {
  res.status(200).send('Depósito efetuado com sucesso')
})

app.put('/transferencia',(req: Request, res: Response) => {
  res.status(200).send('Depósito efetuado com sucesso')
})

app.listen(3003, ( ) => {console.log ('Server is running in localhost:3003')}) 
