import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator {
  generateToken = (payload: authenticationData) => {
     return jwt.sign(
          payload,
          process.env.JWT_KEY as string, 
          {
              expiresIn: "1min"
          }
      )
  }

  getTokenData = (token: string) => {
      const tokenData = jwt.verify(
          token,  process.env.JWT_KEY as string, 
      )

      return tokenData
  }
}