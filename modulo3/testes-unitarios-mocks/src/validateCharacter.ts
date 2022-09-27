export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}

export const validateCharacter = (character: Character): boolean => {
  if (
    !character.name ||
    character.life <= 0 ||
    character.defense <= 0 ||
    character.strength <= 0
  ) {
    return false;
  }
  return true;
};
