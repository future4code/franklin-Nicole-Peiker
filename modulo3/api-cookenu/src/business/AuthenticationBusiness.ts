import { UserDatabase } from '../database/UserDatabase';
import {
  ILoginInputDTO,
  ISignupInputDTO,
  ITokenOutputDTO,
  IUserDB,
  User
} from '../model/User';
import { Authenticator, ITokenPayload } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export class AuthenticationBusiness {
  constructor(
    protected userDatabase: UserDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
  ) {}

  public signUp = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new Error('Um ou mais parâmetros faltando');
    }

    if (typeof name !== 'string' || name.length < 3) {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (typeof email !== 'string') {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== 'string' || password.length < 6) {
      throw new Error('A senha precisa de no mínimo 6 caracteres');
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (userDB) {
      throw new Error('Usuário já cadastrado');
    }
    const id = this.idGenerator.generateId();
    const hash = await this.hashManager.hash(password);

    const user = new User(id, name, email, hash);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId()
    };

    const token = this.authenticator.generateToken(payload);

    const response: ITokenOutputDTO = {
      message: 'Cadastro realizado com sucesso',
      token
    };

    return response;
  };
  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new Error('Por favor informe seu email e senha');
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (!userDB) {
      throw new Error('Usuário não encontrado');
    }

    const verifyPassword = await this.hashManager.compare(
      password,
      userDB.password
    );

    if (!verifyPassword) {
      throw new Error('Usuário ou senha inválido.');
    }

    const payload = { id: userDB.id };
    const token = await this.authenticator.generateToken(payload);
    const response: ITokenOutputDTO = {
      message: 'Login efetuado com sucesso',
      token
    };

    return response;
  };
}
