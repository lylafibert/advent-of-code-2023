import { extrapolateHistory } from "./extrapolateHistory";
import { getNextSequence } from "./getNextSequence";
import { Direction, Sequence } from "./types";

export const getNextValueInHistory = ({
  history,
  direction,
}: {
  history: Sequence;
  direction: Direction;
}): number => {
  const sequences = [history];
  let reachedAllZeroes = false;

  while (!reachedAllZeroes) {
    const { nextSequence, isAllZeroes } = getNextSequence(sequences[0]);
    sequences.unshift(nextSequence);
    reachedAllZeroes = isAllZeroes;
  }
  return extrapolateHistory({ sequences, direction });
};
