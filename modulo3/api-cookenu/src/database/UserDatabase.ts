import { User } from '../model/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = 'cookenu_users';
  public static TABLE_FOLLOWERS = 'cookenu_followers';

  public findByEmail = async (email: string) => {
    const user = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .select()
      .where({ email });

    return user[0];
  };

  public createUser = async (user: User) => {};
}
