import { RecipeDatabase } from "../database/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeBusiness{
  constructor(
    protected recipeDatabase: RecipeDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
    ){}
}