import { isGamePossible } from "./isGamePossible";
import { parseGameRecord } from "../parseGameRecord";
import { Cubes } from "../types";

export const getPossibleGamesSum = ({
  bag,
  gameRecords,
}: {
  bag: Cubes;
  gameRecords: string[];
}): number =>
  gameRecords.reduce((sum, currentGameRecord) => {
    const { game, id } = parseGameRecord(currentGameRecord);
    return isGamePossible({ bag, game }) ? sum + id : sum;
  }, 0);
