import { performAttack } from '../src/performAttack';
import { Character } from '../src/validateCharacter';

describe('Testing function performAttack', () => {
  test('Should recieve two characters with all valid parameters where the defender lost 200 points.', () => {
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

  test('One of the players should have no name and the fuction pass with a error message.', () => {
    expect.assertions(4);
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
        expect(validator).toHaveBeenCalledTimes(1);
        expect(validator).toHaveReturnedTimes(1);
      }
    }
  });
});

// a) Devemos criar um mock de validate character para que performAttack não seja dependente dela e possamos testar performAttack independente
