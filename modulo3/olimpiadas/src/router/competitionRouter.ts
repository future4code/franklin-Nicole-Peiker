import { Router } from 'express';
import CompetitionBusiness from '../business/CompetitionBusiness';
import CompetitionController from '../controller/CompetitionController';
import { CompetitionDatabase } from '../database/CompetitionDatabase';
import { IdGenerator } from '../services/IdGenerator';

const competitionRouter = Router();
const competitionController = new CompetitionController(
  new CompetitionBusiness(new CompetitionDatabase(), new IdGenerator())
);

competitionRouter.post('/competition', competitionController.createCompetition);
competitionRouter.post(
  '/competition/:id',
  competitionController.insertResultCompetition
);
competitionRouter.put('/competition/:userId', competitionController.insertTry);
competitionRouter.put(
  '/competition/end/:id',
  competitionController.endCompetition
);
competitionRouter.get('/ranking/:id', competitionController.getRanking);

export default competitionRouter;
