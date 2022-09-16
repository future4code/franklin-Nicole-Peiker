import { Router } from 'express';
import { AuthenticationController } from '../controller/AuthenticationController';

export const authenticationRouter = Router()
const authenticationController = new AuthenticationController()

authenticationRouter.post("/login", authenticationController.login)
authenticationRouter.post("/signup", authenticationController.signup)

