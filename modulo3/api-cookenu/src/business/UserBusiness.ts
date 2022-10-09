import { UserDatabase } from '../database/UserDatabase';
import { Authenticator, ITokenPayload } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export class UserBusiness {
  constructor(
    protected userDatabase: UserDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
  ) {}
  public getMyProfile = async (token: string) => {
    if (!token) {
      throw new Error('É necessario estar logado para buscar um perfil.');
    }

    const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
    const id = tokenData.id;
    console.log(id);
    if (!tokenData) {
      throw new Error('Token inválido');
    }

    const userDB = this.userDatabase.getUserById(id);
    if (!userDB) {
      throw new Error('Usuário não encontrado');
    }

    return userDB;
  };
  public getAnotherProfile = async (token: string, id: string) => {
    if (!token) {
      throw new Error('É necessario estar logado para buscar um perfil.');
    }

    const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error('Token inválido');
    }

    const userDB = this.userDatabase.getUserById(id);
    if (!userDB) {
      throw new Error('Usuário não encontrado');
    }

    return userDB;
  };
}
