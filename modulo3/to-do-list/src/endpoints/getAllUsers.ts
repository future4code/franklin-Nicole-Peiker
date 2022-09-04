import { Request, Response } from 'express';
import connection from "../connection"

export const getAllUser = async (req: Request, res: Response) => {
  let errorStatus = 500
  try {
    const result = await connection("TodoListUser").select()
    const users: {} = { users : result}
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorStatus).send(error.message)
  }
}