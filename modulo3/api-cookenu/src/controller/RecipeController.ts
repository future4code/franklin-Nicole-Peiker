import Express, { Request, Response } from 'express';
import { RecipeBusiness } from '../business/RecipeBusiness';
import { ICreateRecipeInputDTO, IRecipeDTO } from '../model/Recipe';
export class RecipeController {
  constructor(protected recipeBusiness: RecipeBusiness) {}
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: ICreateRecipeInputDTO = {
        title: req.body.title,
        description: req.body.description
      };
      const result: IRecipeDTO = await this.recipeBusiness.createRecipe(
        token,
        input
      );

      res.status(201).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: 'Erro inesperado' });
    }
  };

  public getRecipeById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;
      const result = await this.recipeBusiness.getRecipeById(token, id);

      res.status(200).send(result);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
}
