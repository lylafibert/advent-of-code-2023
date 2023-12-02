import { Cubes } from "./types";
import { COLOURS } from "./constants";

export const getCubesRequriedForGame = (Cubess: Cubes[]): Cubes => {
  const [firstHandful, ...remainingHandfuls] = Cubess;

  const requiredCubes = firstHandful;

  remainingHandfuls.forEach((handful) => {
    COLOURS.forEach((colour) => {
      const colourCount = handful[colour];

      if (requiredCubes[colour] < colourCount)
        requiredCubes[colour] = colourCount;
    });
  });

  return requiredCubes;
};
