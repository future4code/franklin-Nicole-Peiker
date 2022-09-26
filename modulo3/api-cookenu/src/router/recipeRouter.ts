import { Router } from 'express';
import { RecipeBusiness } from '../business/RecipeBusiness';
import { RecipeController } from '../controller/RecipeController';
import { RecipeDatabase } from '../database/RecipeDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const recipeRouter = Router();

const recipeController = new RecipeController(
  new RecipeBusiness(
    new RecipeDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
);

recipeRouter.post('/recipe', recipeController.createRecipe);
recipeRouter.post('/recipe/:id', recipeController.getRecipeById);
