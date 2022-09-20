import { Router } from 'express';
import { AuthenticationBusiness } from '../business/AuthenticationBusiness';
import { AuthenticationController } from '../controller/AuthenticationController';
import { UserDatabase } from '../database/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';
export const authenticationRouter = Router();
const authenticationController = new AuthenticationController(
  new AuthenticationBusiness(
    new UserDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
);

authenticationRouter.post('/signup', authenticationController.signup);
// authenticationRouter.post("/login", authenticationController.login)
