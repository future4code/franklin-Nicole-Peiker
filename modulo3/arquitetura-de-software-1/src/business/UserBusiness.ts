import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (name: string, email: string, password: string) => {
        //tratar os dados recebidos

       

        //gerar id
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
        //gerar hash a partir da senha recebida pra salvar no db
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        //instanciar o usuário assim garante que tem todos os dados 
        const user = new User(
            id,
            name,
            email,
            hashPassword
        )
        // inserir dados no db
        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)
        // gera o payload com as infos a serem guardadas pra usar no authenticator 
        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        //gerar o token
        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)
        //é melhor armazenar em um objeto de resposta pois pode ter q passar mais informações além de token
        const response = {
            token
        }

        return response
    }
}


