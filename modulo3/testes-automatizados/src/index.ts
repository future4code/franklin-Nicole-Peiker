import { User } from './models/exercicio1';
import { Casino, IResultItemOutputDTO, IResultOutputDTO, NACIONALITY, UserCasino } from './models/exercicio3';

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    const newBalance = user.balance - value;
    const newUser: User = { ...user, balance: newBalance };
    return newUser;
  } else {
    return undefined;
  }
}


function verifyAge(casino: Casino, users: UserCasino[]): IResultOutputDTO {
  const allowedBR: {}[] = []
  const unallowedBR: {}[] = []
  const allowedUS: {}[] = []
  const unallowedUS: {}[] = []

  for(const user of users) {
    if(user.age >= 18 && user.nacionality === NACIONALITY.BRAZILIAN){
      allowedBR.push(user)
    } if(user.age >= 18 && user.nacionality === NACIONALITY.AMERICAN){
      allowedUS.push(user)
    } if(user.age < 18 && user.nacionality === NACIONALITY.BRAZILIAN){
      unallowedBR.push(user)
    } if(user.age < 18 && user.nacionality === NACIONALITY.AMERICAN){
      unallowedUS.push(user)
    } 

  for(const allowed of alloweds){}

  const result  = {
    brazilians: { 
      allowed: allowedBR,
      notAllowed: unallowedBR
    },
    americans: { 
      allowed: allowedUS,
      notAllowed: unallowedUS
    }
  } 
  return result
}

