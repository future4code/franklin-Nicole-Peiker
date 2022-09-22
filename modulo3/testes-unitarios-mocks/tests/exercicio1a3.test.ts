import { validateCharacter } from '../src/validateCharacter';

describe('Testing function validateCharacter', () => {
  test("Return false when the character isn't informed", () => {
    const result = validateCharacter({
      name: '',
      life: 1500,
      defense: 100,
      strength: 80
    });
    expect(result).toBe(false);
  });
  test("Return false when the character life isn't informed", () => {
    const result = validateCharacter({
      name: 'Bulbasaur',
      life: 0,
      defense: 100,
      strength: 80
    });
    expect(result).toBe(false);
  });
  test('Return false when the character strengh is equal 0', () => {
    const result = validateCharacter({
      name: 'Charmander',
      life: 1500,
      defense: 100,
      strength: 0
    });
    expect(result).toBe(false);
  });
  test('Return false when the character defense is equal 0', () => {
    const result = validateCharacter({
      name: 'Charmander',
      life: 1500,
      defense: 0,
      strength: 80
    });
    expect(result).toBe(false);
  });
  test('Return false if defense is a negative value', () => {
    const result = validateCharacter({
      name: 'Bulbasaur',
      life: 1500,
      defense: -80,
      strength: 110
    });
    expect(result).toBe(false);
  });
  test('Return true when all parameters are valid', () => {
    const result = validateCharacter({
      name: 'Bulbasaur',
      life: 1500,
      defense: 80,
      strength: 100
    });
    expect(result).toBe(true);
  });
});
