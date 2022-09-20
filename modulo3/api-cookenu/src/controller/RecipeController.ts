import Express from "express"
import { RecipeBusiness } from "../business/RecipeBusiness"
export class RecipeController {
  constructor(
    protected userBusiness: RecipeBusiness
  ){}
  public getRecipes  = async (req: Request, res: Response) => {
  
  }

  public getRecipeById = async (req: Request, res: Response) => {
    
  }

}