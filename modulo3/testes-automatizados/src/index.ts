import { User } from './models/exercicio1';

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    const newBalance = user.balance - value;
    const newUser: User = { ...user, balance: newBalance };
    return newUser;
  } else {
    return undefined;
  }
}
