import { Request, Response } from 'express';
import CompetitionBusiness from '../business/CompetitionBusiness';
import {
  IInsertResultInputDTO,
  IInsertTryInputDTO,
  IModalityInputDTO
} from '../model/Competition';

export default class CompetitionController {
  constructor(protected competitionBusiness: CompetitionBusiness) {}

  public createCompetition = async (req: Request, res: Response) => {
    try {
      const input: IModalityInputDTO = { modality: req.body.modality };

      await this.competitionBusiness.createCompetition(input);
      res.status(201).send('Competição criada com sucesso');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: 'Erro inesperado' });
    }
  };

  public insertResultCompetition = async (req: Request, res: Response) => {
    try {
      const input: IInsertResultInputDTO = {
        competitionId: req.params.id,
        name: req.body.name,
        value: Number(req.body.value)
      };

      await this.competitionBusiness.insertResultCompetition(input);
      res.status(201).send('Resultado inserido com sucesso');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: 'Erro inesperado' });
    }
  };

  public insertTry = async (req: Request, res: Response) => {
    try {
      const input: IInsertTryInputDTO = {
        userId: req.params.userId,
        value: req.body.value
      };

      const result = await this.competitionBusiness.insertTry(input);
      res.status(200).send(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
  public endCompetition = async (req: Request, res: Response) => {
    try {
      const competitionId = req.params.id;

      await this.competitionBusiness.endCompetition(competitionId);
      res.status(200).send('Status da competição alterado para fechado');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
  public getRanking = async (req: Request, res: Response) => {
    try {
      const competitionId = req.params.id;

      const result = await this.competitionBusiness.getRanking(competitionId);
      res.status(200).send(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: 'Erro inesperado' });
    }
  };
}
