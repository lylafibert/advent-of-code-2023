import { getNextValueInHistory } from "./getNextValueInHistory";
import { Sequence } from "./types";

export const getNextValueSum = (histories: Sequence[]): number =>
  histories.reduce(
    (sum, currentHistory) => getNextValueInHistory(currentHistory) + sum,
    0
  );
