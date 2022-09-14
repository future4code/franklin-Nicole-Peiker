import {Request, Response} from "express"

export const teste = (req:Request, res:Response) =>{
  try {
    res.status(200).send('deu boa')
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}