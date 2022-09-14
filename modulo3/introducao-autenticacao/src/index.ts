import app from "./app"
import { Request, Response } from 'express'
import { teste } from './endpoints/teste'
import { createUser } from "./endpoints/createUser"
import connection from './connection'
import { login } from "./endpoints/login"
import * as jwt from "jsonwebtoken";
import { authenticationData } from "./types"

app.get("/", teste)
app.post('/user/signup', createUser)
app.post("/user/login", login )
app.get("/user/profile",)

export const getUserByEmail = async(email: string): Promise<any> => {
  const result = await connection
    .select()
    .from('User')
    .where({ email });

  return result[0];

 }

export const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

export const getUserInfoById = async (id: string): Promise<any> => {
  const result = await connection
    .select()
    .from('User')
    .where({ id });

  return result[0];
}


  