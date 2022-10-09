import { RecipeDatabase } from '../database/RecipeDatabase';
import { ICreateRecipeInputDTO, IRecipeDTO } from '../model/Recipe';
import { Authenticator, ITokenPayload } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export class RecipeBusiness {
  constructor(
    protected recipeDatabase: RecipeDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
  ) {}
  public createRecipe = async (
    token: string,
    input: ICreateRecipeInputDTO
  ): Promise<any> => {
    if (!token) {
      throw new Error('É necessario estar logado para buscar um perfil.');
    }

    const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error('Token inválido');
    }

    const { title, description } = input;

    if (!title || !description) {
      throw new Error('É necessário preencher título e descrição');
    }

    const id = this.idGenerator.generateId();
    const date: Date = new Date();
    const createAt: string = date.toISOString().split('T')[0];
    const newRecipe: IRecipeDTO = {
      id,
      title,
      description,
      createAt
    };

    const recipeDB = await this.recipeDatabase.createRecipe(newRecipe);

    return recipeDB;
  };
  public getRecipeById = async (token: string, id: string) => {
    if (!token) {
      throw new Error('É necessario estar logado para buscar um perfil.');
    }

    const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error('Token inválido');
    }

    if (!id) {
      throw new Error('Por favor informe o id da receita');
    }

    const recipe = await this.recipeDatabase.getRecipeById(id);

    return recipe;
  };
}
