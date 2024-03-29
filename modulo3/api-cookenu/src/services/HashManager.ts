import * as bcrypt from 'bcryptjs'

export class HashManager {
  public hash = async (password: string) :Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt  = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(password, salt)

    return result 
  }

  public compare = async (password: string, hash: string) => {
    const result = await bcrypt.compare(password, hash)
    
    return result
  }
}