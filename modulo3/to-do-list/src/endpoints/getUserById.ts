import { Request, Response } from 'express'
import connection from '../connection'

export const getUserById = async (req: Request, res: Response)=> {
  let errorStatus: number= 500
  try {
    const id:string = req.params.id
    const result = await connection("TodoListUser")
      .select()
      .where("id", id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
}