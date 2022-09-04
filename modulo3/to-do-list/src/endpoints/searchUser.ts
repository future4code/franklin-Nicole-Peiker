import { Request, Response } from 'express'
import connection from '../connection'

export const searchUser = async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id = req.query.creatorUserId
    if (!id) {
      res.status(400).send('creatorUserId não informado')
    }else{
      const result: any = await connection("Task")
        .select("Task.id as taskId", "Task.title", "Task.description", "Task.limitDate", "Task.status", "Task.creatorUserId", "TodoListUser.nickname")
        .from('Task')
        .join("TodoListUser", "Task.creatorUserId", "TodoListUser.id")
        .where("creatorUserId", id)
        res.status(200).send(result)
    }


//falta formatar a data de retorno
  } catch (error:any) {
    res.status(errorStatus).send(error.message)
  }
}