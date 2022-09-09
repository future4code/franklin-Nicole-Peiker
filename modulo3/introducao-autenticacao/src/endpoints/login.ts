import {Request, Response} from "express"
import { getUserByEmail } from "../index";
import { generateToken } from "../services/Authenticator";

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    if (!email || email.includes("@") === false) {
      throw new Error("O email esta incorreto");
    }
    const user = await getUserByEmail(email);
    if (user.password !== password) {
      throw new Error("Invalid password");
    }
    
    const token = generateToken(user.id);
    res.status(200).send({token});
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    });
  }
}