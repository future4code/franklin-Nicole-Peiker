import { IUserDB, User } from '../model/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = 'cookenu_users';
  public static TABLE_FOLLOWERS = 'cookenu_followers';

  public findByEmail = async (email: string): Promise<any> => {
    const [user] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ email });

    return user;
  };

  public createUser = async (user: User): Promise<any> => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword()
    };

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };
  public getUserById = async (id: string): Promise<any> => {
    const [user] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select()
      .where(id);

    return user;
  };
}
