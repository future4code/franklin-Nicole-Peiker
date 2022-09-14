import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role } = req.body
   
      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const userDB = new UserDatabase()
      const user = await userDB.getByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const idGenerator = new IdGenerator()
      const id= idGenerator.generateId()

      const hashGenerator = new HashManager()
      const hash = await hashGenerator.generateHash(password)

      const newUser: user = { id, name, nickname, email, password: hash, role
       }

      await userDB.create(newUser)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({id, role })

      res.status(201).send({ newUser: {id, name, nickname, email}, token })

   } catch (error: any) {
      //quando tem um erro não tratado, ele entra no catch, mas sem um status code, por isso é feito o if abaixo
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}