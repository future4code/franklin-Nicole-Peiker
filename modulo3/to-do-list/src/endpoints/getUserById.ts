import {Request, Response} from "express"
import connection from "../connection";

export const getUserById = async (req: Request, res: Response): Promise<any>=> {
  let errorStatus = 500
  try {
    const result = await connection("TodoListUser")   
    .select("id", "nickname") 
    .from("TodoListUser")
    .where({id: req.params.id})
    if(result.length === 0){
      errorStatus = 400
      throw new Error("Usuário não encontrado")
    }
    res.status(200).send(result)
  } catch (error) {
    console.log(error);
    res.status(errorStatus).send(error.message)
  }
}
