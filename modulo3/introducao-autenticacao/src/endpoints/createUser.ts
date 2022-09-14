import {Request, Response} from "express"
import connection from "../connection"
import { generateToken } from "../services/Authenticator"
import { generateId } from "../services/idGenerator"

export const createUser = async (req:Request, res:Response) =>{
  try {
    const {email, password} = req.body
    
    if(!email || !password){
      throw new Error ("Email ou senha incorreto.")
    } else if(email.includes("@") === false){
      throw new Error ('O email esta incorreto.')
    } else if(password.length < 6){
      throw new Error ('Sua senha deve possuir no mínimo 6 caracteres.')
    } else{
      const id = generateId()
      await connection ('User')
      .insert({id, email, password})
      .into('User')
  
      const token = generateToken(id)
      res.status(200).send(token )
    }
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}

