import {
  Competition,
  ICompetitionDB,
  IIdDTO,
  IInsertResultDB,
  IInsertResultInputDTO,
  Result,
  STATUS
} from '../model/Competition';
import competitionRouter from '../router/competitionRouter';
import { BaseDatabase } from './BaseDatabase';

export class CompetitionDatabase extends BaseDatabase {
  public static TABLE_COMPETITIONS = 'Competitions';
  public static TABLE_RESULTS = 'CompetitionResults';

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

  public createCompetition = async (competition: Competition) => {
    const competitionDB = this.toCompetitionModelDB(competition);

    await this.getConnection()(CompetitionDatabase.TABLE_COMPETITIONS).insert(
      competitionDB
    );
  };

  public getCompetitionById = async (id: string) => {
    const [result] = await this.getConnection()(
      CompetitionDatabase.TABLE_COMPETITIONS
    )
      .select()
      .where({ id });

    console.log(result);

    return result;
  };

  public getUserById = async (userId: string) => {
    const [result] = await this.getConnection()(
      CompetitionDatabase.TABLE_RESULTS
    )
      .select()
      .where({ userId });

    console.log(result);

    return result;
  };

  public insertResultCompetition = async (newResult: Result) => {
    const resultDB = this.toResultModelDB(newResult);
    console.log(resultDB);
    await this.getConnection()(CompetitionDatabase.TABLE_RESULTS).insert(
      resultDB
    );
  };

  public insertTry = async (userId: string, value: number, tries: number) => {
    const affectedRows = await this.getConnection()(
      CompetitionDatabase.TABLE_RESULTS
    )
      .update({ value, tries })
      .where({ userId });
    console.log(affectedRows);
  };
  public endCompetition = async (status: STATUS, competitionId: string) => {
    const affectedRows = await this.getConnection()(
      CompetitionDatabase.TABLE_COMPETITIONS
    )
      .update({ status })
      .where({ id: competitionId });
    console.log(affectedRows);
  };
  public getRanking = async (competitionId: string) => {
    const result = await this.getConnection()(
      CompetitionDatabase.TABLE_COMPETITIONS
    )
      .select([
        `${CompetitionDatabase.TABLE_RESULTS}.name AS name`,
        `${CompetitionDatabase.TABLE_RESULTS}.value AS value`,
        `${CompetitionDatabase.TABLE_RESULTS}.tries AS tries`,
        `${CompetitionDatabase.TABLE_COMPETITIONS}.status AS status`
      ])
      .from(CompetitionDatabase.TABLE_COMPETITIONS)
      .join(
        CompetitionDatabase.TABLE_RESULTS,
        `${CompetitionDatabase.TABLE_RESULTS}.competitionId`,
        `${CompetitionDatabase.TABLE_COMPETITIONS}.id`
      )
      .whereRaw(
        `${CompetitionDatabase.TABLE_COMPETITIONS}.id = "${competitionId}"`
      )
      .orderBy('value', 'desc');

    console.log(result);
    return result;
  };
}
