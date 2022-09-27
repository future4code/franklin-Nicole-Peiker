import { Character } from './validateCharacter';

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (character: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error('Invalid Character');
  }
  if (attacker.strength > defender.defense) {
    const hit = attacker.strength - defender.defense;
    return (defender.life -= hit);
  }
};
