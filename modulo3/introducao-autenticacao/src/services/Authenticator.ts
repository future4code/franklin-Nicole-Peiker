import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (id: string): string => {
    const token = jwt.sign(
      {
        id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1min"
      }
    );
    return token;
  }