import { getNextValueInHistory } from "./getNextValueInHistory";
import { Direction, Sequence } from "./types";

export const getNextValueSum = ({
  histories,
  direction,
}: {
  histories: Sequence[];
  direction: Direction;
}): number =>
  histories.reduce(
    (sum, currentHistory) =>
      getNextValueInHistory({ history: currentHistory, direction }) + sum,
    0
  );
