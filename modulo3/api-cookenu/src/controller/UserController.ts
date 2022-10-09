import Express, { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { IProfileOutputDTO } from '../model/User';

export class UserController {
  constructor(protected userBusiness: UserBusiness) {}
  public getMyProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const response: IProfileOutputDTO = await this.userBusiness.getMyProfile(
        token
      );
      console.log(token);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
  public getAnotherProfile = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;
      const response: IProfileOutputDTO =
        await this.userBusiness.getAnotherProfile(token, id);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
}
