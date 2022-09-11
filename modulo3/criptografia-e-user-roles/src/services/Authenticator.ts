import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types"

export class Authenticator {
	public generateToken = (payload: AuthenticatorData) => {
   	return jwt.sign(
        	payload,
        	process.env.JWT_KEY as string,
        	{
            	expiresIn: "5h"
        	})}
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
