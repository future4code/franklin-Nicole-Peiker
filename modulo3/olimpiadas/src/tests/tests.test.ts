import { describe, expect, test } from '@jest/globals';
import CompetitionBusiness from '../business/CompetitionBusiness';
import {
  IInsertResultInputDTO,
  IModalityInputDTO,
  IResultOutputDB,
  MODALITY
} from '../model/Competition';
import { CompetitionDBMock } from './mocks/CompetitionDBMock';
import { IdGeneratorMock } from './mocks/IdGenratorMock';

describe('Testando os endpoints ', () => {
  const competitionBusiness = new CompetitionBusiness(
    new CompetitionDBMock(),
    new IdGeneratorMock()
  );

  test('Deve retornar o Id da competição criada', async () => {
    const input: IModalityInputDTO = { modality: MODALITY.ONE_HUNDRED_METERS };
    const result = await competitionBusiness.createCompetition(input);
    expect(result).toMatchObject({
      id: 'dd9b7ee8-ae4b-4bd1-9bd6-e7e21594357x'
    });
  });

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

  test('Deve retornar um objeto com o resultado cadastrado', async () => {
    const input: IInsertResultInputDTO = {
      competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
      name: 'Romeo Prestes',
      value: 75
    };

    const result = await competitionBusiness.insertResultCompetition(input);
    expect(result).toMatchObject({
      Resultado: 75,
      Usuário: 'dd9b7ee8-ae4b-4bd1-9bd6-e7e21594357x'
    });
  });

  test('Deve retornar um erro caso o value não seja informado', async () => {
    expect.assertions(1);
    try {
      const input: any = {
        competitionId: 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b',
        name: 'Romeo Prestes',
        value: '',
        tries: 2
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
        name: 'Romeo Prestes',
        value: 'Dez',
        tries: 2
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
        name: 'Romeo Prestes',
        value: -1,
        tries: 2
      };

      await competitionBusiness.insertResultCompetition(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser maior que zero');
      }
    }
  });

  test('Deve retornar uma mensagem de sucesso caso a tentativa seja registrada corretamente', async () => {
    const input: any = {
      userId: 'cc9b7ee8-ae4b-4bd1-9bd6-e7e21594399c',
      value: 78
    };

    const result = await competitionBusiness.insertTry(input);
    expect(result).toBe('Resultado atualizado com sucesso');
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
        value: -5,
        tries: 2
      };
      console.log(input.value);
      await competitionBusiness.insertTry(input);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('O valor deve ser maior que zero');
      }
    }
  });

  test('Deve retornar um erro caso o id da competição não seja informado', async () => {
    expect.assertions(1);
    try {
      const competitionId = '';

      await competitionBusiness.endCompetition(competitionId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Por favor informe o ID da competição');
      }
    }
  });

  test('Deve retornar o novo status', async () => {
    const competitionId = 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b';
    const result = await competitionBusiness.endCompetition(competitionId);

    expect(result).toBe('CLOSE');
  });

  test('Deve retornar um erro caso o id da competição não seja informado', async () => {
    expect.assertions(1);
    try {
      const competitionId = '';

      await competitionBusiness.getRanking(competitionId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Por favor informe o ID da competição');
      }
    }
  });

  test('Deve retornar um array de objetos com o ranking', async () => {
    const competitionId = 'bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b';
    const result: IResultOutputDB[] = await competitionBusiness.getRanking(
      competitionId
    );

    expect(result).toMatchObject([
      {
        name: 'Romeo Prestes',
        value: 70.43,
        tries: 2,
        status: 'CLOSE'
      }
    ]);
  });
});
