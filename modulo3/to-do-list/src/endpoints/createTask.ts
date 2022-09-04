import {Request, Response} from "express"
import connection from "../connection"

export const createTask = async (req: Request, res: Response) =>{
  let errorStatus: number = 500
  try {
    const {title, description, limitDate, creatorUserId} = req.body
    const formatedDate:string = limitDate.split('/').reverse().join("-")
    if(!title || !description || !limitDate || !creatorUserId){
      errorStatus = 400
      throw new Error("É necessário preencher todos os dados para cadastrar uma tarefa")
    }
    await connection("TodoListUser")
      .insert(
        {
          "title": title,
          "description": description,
          "limitDate": formatedDate,
          "creatorUserId": creatorUserId 
        }
      )
      .into("Task")
      res.status(200).send("Tarefa cadastrada com sucesso.")
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
}