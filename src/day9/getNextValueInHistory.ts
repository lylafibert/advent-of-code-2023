import { extrapolateHistory } from "./extrapolateHistory";
import { getNextSequence } from "./getNextSequence";
import { Sequence } from "./types";

export const getNextValueInHistory = (history: Sequence): number => {
  const sequences = [history];
  let reachedAllZeroes = false;

  while (!reachedAllZeroes) {
    const { nextSequence, isAllZeroes } = getNextSequence(sequences[0]);
    sequences.unshift(nextSequence);
    reachedAllZeroes = isAllZeroes;
  }
  return extrapolateHistory(sequences);
};
