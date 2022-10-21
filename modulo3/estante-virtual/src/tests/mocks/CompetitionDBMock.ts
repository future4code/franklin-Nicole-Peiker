import {
  Competition,
  ICompetitionDB,
  IInsertResultDB,
  IResultOutputDB,
  MODALITY,
  Result,
  STATUS
} from '../../model/Competition';

export class CompetitionDBMock {
  public static TABLE_COMPETITIONS = 'CompetitionsMock';
  public static TABLE_RESULTS = 'CompetitionResultsMock';

  public toCompetitionModelDB = (competition: Competition) => {
    const competitionDB: ICompetitionDB = {
      id: competition.getId(),
      modality: competition.getModality(),
      status: competition.getStatus()
    };

    return competitionDB;
  };

  public toResultModelDB = (result: Result) => {
    const resultDB: IInsertResultDB = {
      userId: result.getUserId(),
      competitionId: result.getCompetitionId(),
      name: result.getName(),
      value: result.getValue(),
      tries: result.getTries()
    };

    return resultDB;
  };

  public createCompetition = async (
    competition: Competition
  ): Promise<void> => {};

  public getCompetitionById = async (id: string): Promise<ICompetitionDB> => {
    const result = {
      id: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
      modality: MODALITY.DARTS,
      status: STATUS.OPEN
    };
    return result;
  };

  public getUserById = async (userId: string): Promise<IInsertResultDB> => {
    const result = {
      userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594399c',
      competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
      name: 'Romeo Prestes',
      value: 70.43,
      tries: 2
    };

    return result;
  };

  public insertResultCompetition = async (newResult: Result): Promise<void> => {
    //retornar msg de sucesso
  };

  public insertTry = async (
    userId: string,
    value: number,
    tries: number
  ): Promise<void> => {};

  public endCompetition = async (
    status: STATUS,
    competitionId: string
  ): Promise<void> => {};

  public getRanking = async (competitionId: string) => {
    const result: IResultOutputDB[] = [
      {
        name: 'Romeo Prestes',
        value: 70.43,
        tries: 2,
        status: STATUS.CLOSE
      }
    ];
    return result;
  };
}
