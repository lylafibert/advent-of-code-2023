import { COLOURS } from "./constants";
import { getCubesRequriedForGame } from "./getCubesRequiredForGame";
import { Cubes, Game } from "./types";

export const isGamePossible = ({
  bag,
  game,
}: {
  bag: Cubes;
  game: Game;
}): boolean => {
  const cubesRequiredForGame = getCubesRequriedForGame(game);

  let isGamePossible = true;

  for (let i = 0; isGamePossible && i < COLOURS.length; i++) {
    const colour = COLOURS[i];
    if (bag[colour] < cubesRequiredForGame[colour]) isGamePossible = false;
  }

  return isGamePossible;
};
