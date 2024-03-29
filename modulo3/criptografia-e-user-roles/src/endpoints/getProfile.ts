import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getProfile(req: Request, res: Response):Promise<void>{
    try{
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token não enviado")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        if(data.role !== 'normal'){
            throw new Error('Somente usuários do tipo "normal" podem acessar essa funcionalidade')
        }
        
        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        res.send({
            user: {
                email: user.email,
                id: user.id, 
                role: data.role
            }
        })


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}