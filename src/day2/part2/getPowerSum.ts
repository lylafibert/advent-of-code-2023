import { getCubesRequriedForGame } from "../getCubesRequiredForGame";
import { parseGameRecord } from "../parseGameRecord";
import { Colour } from "../types";

export const getPowerSum = (gameRecords: string[]): number =>
  gameRecords.reduce((sum, gameRecord) => {
    const { game } = parseGameRecord(gameRecord);
    const minimumCubes = getCubesRequriedForGame(game);
    return (
      sum +
      minimumCubes[Colour.Blue] *
        minimumCubes[Colour.Green] *
        minimumCubes[Colour.Red]
    );
  }, 0);
