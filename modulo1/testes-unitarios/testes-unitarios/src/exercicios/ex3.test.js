import { checaItensDuplicados } from './ex3';

describe('Checa itens duplicados', () => {
  test('Retorna true para "[1, 2, 1]"', () => {
    const resultado = checaItensDuplicados([1, 2, 1]);
    expect(resultado).toEqual(true);
  });

  test('Retorna true para "["a", "a", "b", "c"] "', () => {
    const resultado = checaItensDuplicados(['a', 'a', 'b', 'c']);
    expect(resultado).toEqual(true);
  });

  test('Retorna false para "[]"', () => {
    const resultado = checaItensDuplicados([]);
    expect(resultado).toEqual(false);
  });

  test('Retorna false para "[1, 2, 3]"', () => {
    const resultado = checaItensDuplicados([1, 2, 3]);
    expect(resultado).toEqual(false);
  });

  test('Retorna false para "["f", "d", "e", "f"]"', () => {
    const resultado = checaItensDuplicados(['f', 'd', 'e', 'f']);
    expect(resultado).toEqual(true);
  });
});
