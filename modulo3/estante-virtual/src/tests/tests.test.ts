import { describe, expect, test } from '@jest/globals';
import CompetitionBusiness from '../business/CompetitionBusiness';
import { CompetitionDBMock } from './mocks/CompetitionDBMock';
import { IdGeneratorMock } from './mocks/IdGenratorMock';

describe('Testando os endpoints ', () => {
  const competitionBusiness = new CompetitionBusiness(
    new CompetitionDBMock(),
    new IdGeneratorMock()
  );
  test('Deve retornar um erro caso a modalidade não seja informada', async () => {
    expect.assertions(1);
    try {
      const modality: any = '';

      await competitionBusiness.createCompetition(modality);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Por favor insira a modalidade');
      }
    }
  });

  test('Deve retornar um erro caso o value não seja informado', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
        name: 'Dulce',
        value: '',
        tries: 1
      };

      await competitionBusiness.insertResultCompetition(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('É necessario preencher todos os campos');
      }
    }
  });

  test('Deve retornar um erro caso o nome tenha um formato diferente de string', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
        name: 25,
        value: 20.5,
        tries: 1
      };

      await competitionBusiness.insertResultCompetition(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O formato do nome esta incorreto');
      }
    }
  });

  test('Deve retornar um erro caso o valor não seja um numero', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
        name: 'Dulce',
        value: 'Dez',
        tries: 1
      };

      await competitionBusiness.insertResultCompetition(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser em formato numérico');
      }
    }
  });

  test('Deve retornar um erro caso o valor seja menor ou igual a zero', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
        name: 'Dulce',
        value: -1,
        tries: 1
      };

      await competitionBusiness.insertResultCompetition(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser maior que zero');
      }
    }
  });

  test('Deve retornar um erro caso o valor não seja informado', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594399c',
        value: '',
        tries: 2
      };

      await competitionBusiness.insertTry(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Por favor informe o valor');
      }
    }
  });

  test('Deve retornar um erro caso o id do usuário não seja informado', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        userId: '',
        value: 72,
        tries: 2
      };

      await competitionBusiness.insertTry(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Por favor informe o usuário');
      }
    }
  });

  test('Deve retornar um erro caso o valor não um número', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594399c',
        value: 'vinte',
        tries: 2
      };

      await competitionBusiness.insertTry(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser em formato numérico');
      }
    }
  });

  test('Deve retornar um erro caso o valor seja menor ou igual a zero', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594399c',
        value: -52,
        tries: 2
      };

      await competitionBusiness.insertTry(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser maior que zero');
      }
    }
  });
});
