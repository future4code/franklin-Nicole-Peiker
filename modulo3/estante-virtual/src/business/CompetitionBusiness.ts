import { CompetitionDatabase } from '../database/CompetitionDatabase';
import {
  Competition,
  ICompetitionDB,
  IInsertResultInputDTO,
  IInsertTryInputDTO,
  IModalityInputDTO,
  MODALITY,
  Result,
  STATUS
} from '../model/Competition';
import { IdGenerator } from '../services/IdGenerator';

export default class CompetitionBusiness {
  constructor(
    protected competitionDatabase: CompetitionDatabase,
    protected idGenerator: IdGenerator
  ) {}
  public createCompetition = async (input: IModalityInputDTO) => {
    const modality = input.modality;

    if (!modality) {
      throw new Error('Por favor insira a modalidade');
    }

    const id = this.idGenerator.generateId();
    const status = STATUS.OPEN;

    const competition = new Competition(id, modality, status);
    await this.competitionDatabase.createCompetition(competition);

    return id;
  };

  public insertResultCompetition = async (input: IInsertResultInputDTO) => {
    const competitionId = input.competitionId;
    const name = input.name;
    const value = input.value;
    const tries = 1;

    if (!competitionId || !name || !value) {
      throw new Error('É necessario preencher todos os campos');
    }

    if (typeof name !== 'string') {
      throw new Error('O formato do nome esta incorreto');
    }

    if (typeof value !== 'number') {
      throw new Error('O valor deve ser em formato numérico');
    }

    if (value <= 0) {
      throw new Error('O valor deve ser maior que zero');
    }

    const verifyId = await this.competitionDatabase.getCompetitionById(
      competitionId
    );

    if (!verifyId) {
      throw new Error('Competição não encontrada');
    }

    const userId = this.idGenerator.generateId();

    const newResult = new Result(userId, competitionId, name, value, tries);

    await this.competitionDatabase.insertResultCompetition(newResult);

    return { Usuário: userId, Resultado: value };
  };

  public insertTry = async (input: IInsertTryInputDTO) => {
    const userId = input.userId;
    let value = input.value;

    if (!value) {
      throw new Error('Por favor informe o valor');
    }

    if (!userId) {
      throw new Error('Por favor informe o usuário');
    }

    if (typeof value !== 'number') {
      throw new Error('O valor deve ser em formato numérico');
    }

    if (value <= 0) {
      throw new Error('O valor deve ser maior que zero');
    }

    const verifyIdUser = await this.competitionDatabase.getUserById(userId);

    if (!verifyIdUser) {
      throw new Error('Usuário não encontrado');
    }

    const competitionId = verifyIdUser.competitionId;
    const tries = verifyIdUser.tries + 1;

    const verifyIdCompetition =
      await this.competitionDatabase.getCompetitionById(competitionId);
    console.log(verifyIdCompetition.modality);

    if (!verifyIdCompetition) {
      throw new Error('Competição não encontrada');
    }

    if (
      verifyIdCompetition.modality === 'ONE_HUNDRED_METERS' ||
      verifyIdUser.tries === 3
    ) {
      throw new Error('Você já esgotou o numero de tentativas');
    }

    if (verifyIdUser.value > value) {
      value = verifyIdUser.value;
    }

    await this.competitionDatabase.insertTry(userId, value, tries);
  };

  public endCompetition = async (competitionId: string) => {
    if (!competitionId) {
      throw new Error('Por favor informe o ID da competição');
    }
    const verifyId = await this.competitionDatabase.getCompetitionById(
      competitionId
    );

    if (!verifyId) {
      throw new Error('Competição não encontrada');
    }

    if (verifyId.status === 'CLOSE') {
      throw new Error('Competição fechada');
    }
    const status = STATUS.CLOSE;

    await this.competitionDatabase.endCompetition(status, competitionId);
  };

  public getRanking = async (competitionId: string) => {
    if (!competitionId) {
      throw new Error('Por favor informe o ID da competição');
    }
    const verifyId = await this.competitionDatabase.getCompetitionById(
      competitionId
    );

    if (!verifyId) {
      throw new Error('Competição não encontrada');
    }

    const result = await this.competitionDatabase.getRanking(competitionId);

    if (result.length === 0) {
      throw new Error('Nenhum atleta cadastrado na competition');
    }

    return result;
  };
}
