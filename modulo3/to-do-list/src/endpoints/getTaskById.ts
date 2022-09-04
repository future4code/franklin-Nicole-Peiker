import {Request, Response} from "express"
import connection from "../connection"

export const getTaskById = async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id = req.params.id
    
    if (id === null){
      res.status(errorStatus).send('')
    }
    const result = await connection("Task")
      .select("Task.id as taskId", "Task.title", "Task.description", "Task.limitDate", "Task.status", "Task.creatorUserId", "TodoListUser.nickname")
      .from('Task')
      .join("TodoListUser", "Task.creatorUserId", "TodoListUser.id")
      .where("Task.id", id)
      if(result.length === 0){
        res.status(200).send(`Tarefa não encontrada`)
      }else{
        res.status(200).send(result)
      }
  } catch (error:any) {
    res.status(errorStatus).send(error.message)
  }
}


