import { Router } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { UserController } from '../controller/UserController';
import { UserDatabase } from '../database/UserDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const userRouter = Router();

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
);

userRouter.get('/user/profile', userController.getMyProfile);
userRouter.get('/user/:id', userController.getAnotherProfile);
