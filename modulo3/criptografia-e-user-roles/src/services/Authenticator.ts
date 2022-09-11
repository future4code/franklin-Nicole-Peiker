import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types"
import dotenv from "dotenv"

dotenv.config()
export class Authenticator {
	public generateToken = (payload: AuthenticatorData) => {
   	const token: string = jwt.sign(
			payload,
			process.env.JWT_KEY as string,
			{
					expiresIn: "5h"
				})
				return token
		}
	public getTokenData = (token: string) => {
    	const payload = jwt.verify(
        	token,  process.env.JWT_KEY as string
    	) as any;
			const result = {
				id: payload.id,
				role: payload.role
			}
    	return result
	}
}
