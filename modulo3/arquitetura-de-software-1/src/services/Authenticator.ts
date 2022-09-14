import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { USER_ROLES } from '../model/User'

dotenv.config()

export interface ITokenPayload {
  id: string,
  role: USER_ROLES
}

export class Authenticator {
  generateToken = (payload:ITokenPayload) :string => {
    const token = jwt.sign(
      payload, 
      process.env.JWT_KEY as string, 
      {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
  }
  public getTokenPayload = (token:string) => {
        const payload = jwt.verify(
        token, 
        process.env.JWT_KEY as string
        )
        return payload as ITokenPayload
  }
}
