import { getNextValue } from "./getNextValue";
import { Sequence } from "./types";

export const extrapolateHistory = (sequences: Sequence[]): number => {
  let nextValue = 0;
  for (let i = 1; i < sequences.length; i++) {
    const currentSequence = sequences[i];
    nextValue = getNextValue({ sequence: currentSequence, diff: nextValue });
  }
  return nextValue;
};
