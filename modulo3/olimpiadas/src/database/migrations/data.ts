import {
  ICompetitionDB,
  IInsertResultDB,
  MODALITY,
  STATUS
} from '../../model/Competition';

export const competitions: ICompetitionDB[] = [
  {
    id: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
    modality: MODALITY.DARTS,
    status: STATUS.OPEN
  },
  {
    id: 'f03017bb-2c08-4cdc-bb63-7fbd7cebe01f',
    modality: MODALITY.ONE_HUNDRED_METERS,
    status: STATUS.OPEN
  }
];

export const result: IInsertResultDB[] = [
  {
    userId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
    competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
    name: 'Romeo Prestes',
    value: 70.43,
    tries: 2
  },
  {
    userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594389j',
    competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
    name: 'Iraja Matter',
    value: 60.27,
    tries: 3
  },
  {
    userId: 'dd9b7ee8-ae4b-4bd1-9bd6-e7e21594357x',
    competitionId: 'f03017bb-2c08-4cdc-bb63-7fbd7cebe01f',
    name: 'Camelia Jordana',
    value: 10.234,
    tries: 1
  },
  {
    userId: 'ff9b7ee8-ae4b-4bd1-9bd6-e7e21594332s',
    competitionId: 'f03017bb-2c08-4cdc-bb63-7fbd7cebe01f',
    name: 'Beatrice Martin',
    value: 9.987,
    tries: 1
  }
];
