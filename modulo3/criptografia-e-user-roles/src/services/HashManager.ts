import * as bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export class HashManager { 

public generateHash = async (password: string) :Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST)
  const salt  = await bcrypt.genSalt(rounds)
  const result = await bcrypt.hash(password, salt)

  return result
  //result é a hash
}
public compareHash = async (password: string, hash: string) : Promise<boolean> =>{
  const result = await bcrypt.compare(password, hash)
  return result
}}

