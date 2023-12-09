import { getNextValue } from "./getNextValue";
import { Direction, Sequence } from "./types";

export const extrapolateHistory = ({
  sequences,
  direction,
}: {
  sequences: Sequence[];
  direction: Direction;
}): number => {
  let nextValue = 0;
  for (let i = 1; i < sequences.length; i++) {
    const currentSequence = sequences[i];
    nextValue = getNextValue({
      sequence: currentSequence,
      diff: nextValue,
      direction,
    });
  }
  return nextValue;
};
