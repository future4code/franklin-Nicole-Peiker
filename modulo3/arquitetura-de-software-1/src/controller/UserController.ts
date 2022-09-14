import { Request, Response } from 'express'
import UserBusiness from '../business/UserBusiness'

export class UserController {
  public signup = async(req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body
      
      const userBusiness = new UserBusiness()
      const response = await userBusiness.signup(name, email, password)

      res.status(201).send(response)  
    } catch (error: unknown) {
      if (error instanceof Error) {
          res.status(400).send({ message: error.message })
      }

      res.status(500).send({ message: "Erro inesperado"})
    }
  }
  public login = async (req:Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body

      const userBusiness = new UserBusiness()
      const response = await userBusiness.login(email, password)

      res.status(200).send(response)
    } catch (error: unknown) {
      if(error instanceof Error) {
        res.status(400).send({ message: error.message})
      }   
      res.status(500).send({ message: "Erro inesperado"})   
    }
  }
  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

      const userBusiness = new UserBusiness()
      const response = await userBusiness.showAllUsers()

      res.status(200).send(response)      
    }catch (error: unknown) {
      if(error instanceof Error) {
        res.status(400).send({ message: error.message})
      }   
      res.status(500).send({ message: "Erro inesperado"})   
    }
  }
  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const userBusiness = new UserBusiness()
      const response = await userBusiness.deleteUser(token, id)

      res.status(200).send("Usuário apagado com sucesso")
    } catch (error: unknown) {
      if(error instanceof Error) {
        res.status(400).send({ message: error.message})
      }   
      res.status(500).send({ message: "Erro inesperado"})   
    }
  }
}