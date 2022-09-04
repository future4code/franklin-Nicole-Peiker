import { Request, Response } from 'express'
import connection from "../connection"

export const createUser = async(req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const {name, nickname, email} = req.body
    if(!name || !nickname || !email){
      errorStatus = 400
      throw new Error("É necessário preencher todos os dados para se cadastrar")
    }
    await connection("TodoListUser")
    .insert({
      id: Date.now().toString(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email, 
    }).into("TodoListUser")
    res.status(200).send('Usuário criado com sucesso.')
    
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }

}