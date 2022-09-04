import { Request, Response } from 'express'
import connection from '../connection'

export const updateUserById = async (req: Request, res: Response) => {
  let errorStatus: number = 500
  try {
    const id:string = req.params.id
    const result = await connection("TodoListUser")
      .update(req.body)
      .where("id", id)
    res.send("Alterações efetuadas com sucesso")
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
}