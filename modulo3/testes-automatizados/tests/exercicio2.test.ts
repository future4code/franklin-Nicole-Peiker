import { performPurchase } from '../src';
import { User } from '../src/models/exercicio1';

describe('Testes de verificação de autorização de compra de um usuário', () => {
  test('Testa usuário com o saldo maior do que o valor de compra', () => {
    const user: User = {
      name: 'Maria',
      balance: 150
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({ name: 'Maria', balance: 100 });
  });

  test('Testa usuário com o saldo igual ao valor de compra', () => {
    const user: User = {
      name: 'Ana',
      balance: 100
    };

    const result = performPurchase(user, 100);

    expect(result).toEqual({ name: 'Ana', balance: 0 });
  });

  test('Testa usuário com o saldo menor do que o valor de compra', () => {
    const user: User = {
      name: 'Joana',
      balance: 50
    };

    const result = performPurchase(user, 100);

    expect(result).not.toBeDefined();
  });
});
