import { performAttack } from '../src/performAttack';
import { Character } from '../src/validateCharacter';

describe('Testing function performAttack', () => {
  test('', () => {
    const validator = jest.fn((character: Character) => true);
    const attacker: Character = {
      name: 'Charmander',
      life: 1500,
      defense: 100,
      strength: 300
    };
    const defender: Character = {
      name: 'Bulbasaur',
      life: 1500,
      defense: 100,
      strength: 300
    };
    performAttack(attacker, defender, validator);
    expect(defender.life).toBe(1300);
  });

  test('', () => {
    expect.assertions(3);
    const validator = jest.fn((character: Character) => false);
    try {
      const attacker: Character = {
        name: '',
        life: 1500,
        defense: 100,
        strength: 300
      };
      const defender: Character = {
        name: 'Bulbasaur',
        life: 1500,
        defense: 100,
        strength: 300
      };
      performAttack(attacker, defender, validator);
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe('Invalid Character');
        expect(validator).toHaveBeenCalled();
        expect(validator).toHaveBeenCalledTimes(2);
      }
    }
  });
});

// a) Devemos criar um mock de validate character para que performAttack não seja dependente dela e possamos testar performAttack independente
