import { IRecipeDTO } from '../model/Recipe';
import { BaseDatabase } from './BaseDatabase';

export class RecipeDatabase extends BaseDatabase {
  public static TABLE_RECIPES = 'cookenu_recipes';

  public createRecipe = async (newRecipe: IRecipeDTO): Promise<any> => {
    await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES).insert(
      newRecipe
    );
  };

  public getRecipeById = async (id: string): Promise<any> => {
    const result = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
      .select()
      .where(id);
  };
}
