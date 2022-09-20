import Express from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
  constructor(
    protected userBusiness: UserBusiness  
  ){}
  public getProfile = async (req: Request, res: Response) :Promise<void> => {
  }

  public getUserProfile = async (req: Request, res: Response) :Promise<void> => {
    
  }

}