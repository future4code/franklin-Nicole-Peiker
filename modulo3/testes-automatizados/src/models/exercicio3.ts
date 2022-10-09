export enum LOCATION {
  EUA = 'EUA',
  BRAZIL = 'BRAZIL'
}

export enum NACIONALITY {
  BRAZILIAN = 'BRAZILIAN',
  AMERICAN = 'AMERICAN'
}

export interface UserCasino {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

export interface IResultOutputDTO {
  brazilians: IResultOutputDTO;
  americans: IResultOutputDTO;
}

export interface IResultItemOutputDTO {
  allowed: string[];
  unallowed: string[];
}
