import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (name: string, email: string, password: string) => {
        //tratar os dados recebidos
        if(!name || !email || !password){
            throw new Error('É necessario preencher todos os dados para se cadastrar')
        }

        const emailRegex: RegExp=  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const validateEmail: boolean =  emailRegex.test(String(email).toLowerCase())
         	
        const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,18}$/
        const validatePassword: boolean= passwordRegex.test(password)

        if(!validateEmail){
            throw new Error('Email invalido, por favor verifique')
        }

        if (typeof name !== "string") {
            throw new Error('Nome inválido')
        }

        if (!validatePassword){     
            throw new Error('Sua senha deve conter entre 6 e 18 caracteres sendo ao menos uma letra minúscula, uma letra maiúscula, e um caracter especial e não pode conter espaços')
        }
       

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

        const response = {
            "token": token
        }

        return response
    }
    public login = async (email: string, password: string) :Promise<any> => {
        if(!email || !password){
            throw new Error('É necessario informar email e senha')
        }

        const userDatabase = new UserDatabase()
        const user: any = await userDatabase.getByEmail(email)

        if(!user){
            throw new Error('Usuário não cadastrado')
        }

        const hashManager = new HashManager()
        const verifyPassword: boolean = await hashManager.compare(password, user.password)

        if(!verifyPassword) {
            throw new Error("Email ou senha incorreta")
        }

        const authenticator = new Authenticator()
        const token: string = authenticator.generateToken({id: user.id, role: user.role})
        

        const response = {
            "token": token
        }

        return response
    }
    public showAllUsers = async () :Promise<any> =>{
        const userDatabase = new UserDatabase()
        const users: any = await userDatabase.getAllUsers()

        return users
    }
    public deleteUser = async (token: string, id:string) :Promise<any> => {

        if(!token){
            throw new Error('É necessario estar logado para efetuar essa alteração')
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenPayload(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getById(id)

        if(!user){
            throw new Error('Problemas na identificação do usuário logado. Efetue seu login e tente outra vez.')
        }

        const response = await userDatabase.delete(id)

   
    }

}


