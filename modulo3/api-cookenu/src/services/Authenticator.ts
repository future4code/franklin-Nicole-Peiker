import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export interface ITokenPayload {
  id: string;
}

export class Authenticator {
  public generateToken = (payload: ITokenPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
  };

  public getTokenData = (token: string): ITokenPayload => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string);
    console.log(tokenData);
    return tokenData as ITokenPayload;
  };
}
