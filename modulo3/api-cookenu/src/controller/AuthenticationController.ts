import Express, { Request, Response } from 'express';
import { AuthenticationBusiness } from '../business/AuthenticationBusiness';
import { ISignupInputDTO, ITokenOutputDTO } from '../model/User';

export class AuthenticationController {
  constructor(protected authenticationBusiness: AuthenticationBusiness) {}
  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };

      const response: ITokenOutputDTO =
        await this.authenticationBusiness.signUp(input);

      res.status(201).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: 'Erro inesperado' });
    }
  };

  public login = async (req: Request, res: Response) => {};
}
