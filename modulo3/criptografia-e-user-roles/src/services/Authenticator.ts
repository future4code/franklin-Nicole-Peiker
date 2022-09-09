import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types"

export class Authenticator {
	generateToken = (payload: AuthenticatorData) => {
   	return jwt.sign(
        	payload,
        	process.env.JWT_KEY as string,
        	{
            	expiresIn: "5h"
        	})}
	getTokenData = (token: string) => {
    	const tokenData = jwt.verify(
        	token,  process.env.JWT_KEY as string,
    	)
    	return tokenData
	}
}
