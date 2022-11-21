export enum MODALITY {
  ONE_HUNDRED_METERS = 'ONE_HUNDRED_METERS',
  DARTS = 'DARTS'
}

export enum STATUS {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export interface IInsertResultInputDTO {
  competitionId: string;
  name: string;
  value: number;
}

export interface IInsertTryInputDTO {
  userId: string;
  value: number;
}

export interface IUserIdDTO {
  userId: string;
}
export interface IModalityInputDTO {
  modality: MODALITY;
}

export interface IIdDTO {
  id: string;
}

export interface IRankingOutputDTO {
  competitionId: string;
  modality: MODALITY;
  status: number;
  ranking: {
    name: string;
    result: number;
  }[];
}

export interface ICompetitionDB {
  id: string;
  modality: MODALITY;
  status: STATUS;
}

export interface IInsertResultDB {
  userId: string;
  competitionId: string;
  name: string;
  value: number;
  tries: number;
}

export interface IResultOutputDB {
  name: string;
  value: number;
  tries: number;
  status: STATUS;
}

export class Competition {
  constructor(
    private id: string,
    private modality: MODALITY,
    private status: STATUS = STATUS.OPEN
  ) {}
  public getId = () => {
    return this.id;
  };

  public getModality = () => {
    return this.modality;
  };

  public getStatus = () => {
    return this.status;
  };
  public setStatus = () => {
    return this.status;
  };
}

export class Result {
  constructor(
    private userId: string,
    private competitionId: string,
    private name: string,
    private value: number,
    private tries: number
  ) {}

  public getUserId = () => {
    return this.userId;
  };

  public getCompetitionId = () => {
    return this.competitionId;
  };

  public getName = () => {
    return this.name;
  };

  public getValue = () => {
    return this.value;
  };

  public setValue = () => {
    return this.value;
  };

  public getTries = () => {
    return this.tries;
  };

  public setTries = () => {
    return this.tries;
  };
}
