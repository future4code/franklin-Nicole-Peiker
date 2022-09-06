import {Request, Response} from "express"
import connection from "../connection"

export const createUser = async (req:Request, res:Response) =>{
  try {
    const result = await connection ('User')
    .insert({id, name, password})
    .into('User')

    res.status(200).send('deu boa')
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}