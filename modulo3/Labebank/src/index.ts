import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express( ) 

app.use(express.json( )) 
app.use(cors( )) 

type Account = {
  name:string, 
  cpf:string, 
  birthDate:string,
  transactions: Transaction[]
}

type Transaction = {
  balance:number,
  transfer:number,
  deposit: number,
  dateTransaction: string
}

let accounts: Account[] =[
  {
    name:'Dorian Grey', 
    cpf: '01425963858', 
    birthDate:'1965-03-15',
    transactions: [
      {
        balance:200,
        transfer: 0,
        deposit: 200,
        dateTransaction: '2002-02-22' 
      },
      {
        balance:100,
        transfer: 100,
        deposit: 0,
        dateTransaction: '2002-04-03' 
      }
    ]
  },
  {
    name:'Cathy Heathcliff', 
    cpf: '59638588558', 
    birthDate:'1985-08-25',
    transactions: [
      {
        balance:1500,
        transfer: 0,
        deposit: 400,
        dateTransaction: '2015-11-22' 
      },
      {
        balance:1800,
        transfer: 0,
        deposit: 300,
        dateTransaction: '2015-12-03' 
      },
      {
        balance:1300,
        transfer: 500,
        deposit: 0,
        dateTransaction: '2016-01-09' 
      }
    ]
  }

]

app.post('/conta/criarconta', (req: Request, res: Response) => {
  const newAccount: Account = req.body
  const birth = new Date(newAccount.birthDate)
  const today = new Date();

  const age = today.getFullYear() - birth.getFullYear()

  if(req.body.name && req.body.cpf && req.body.birthDate && req.body.transactions){
    if(age < 18){
      res.status(406).send('É necessario ter mais de 18 anos para abrir uma conta')
    } else {
      accounts.push(newAccount)
      res.status(201).send('Conta criada com sucesso')
    }
  } else {
    res.status(406).send('É necessário preencher todos os dados para abrir uma conta')
  }

})

app.get('/contas',(req: Request, res: Response)=> {
  res.status(200).send(accounts)
})

// app.get('/:cpf/saldo',(req: Request, res: Response)=> {
//   const cpf:string = req.params.cpf
//   const indexLastOperation = (req.params.transactions).length - 1
//   const currentBalance = req.params.transactions[indexLastOperation]
//   res.status(200).send(`Seu saldo é ${currentBalance}`)
// })

// app.get('/conta/deposito',(req: Request, res: Response) => {
//   const amount = req.body
//   res.status(200).send('Depósito efetuado com sucesso')
// })

// app.put('/transferencia',(req: Request, res: Response) => {
//   res.status(200).send('Depósito efetuado com sucesso')
// })

app.listen(3003, ( ) => {console.log ('Server is running in localhost:3003')}) 
