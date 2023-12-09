import { Direction, Sequence } from "./types";

export const getNextValue = ({
  sequence,
  diff,
  direction,
}: {
  sequence: Sequence;
  diff: number;
  direction: Direction;
}): number => {
  const index = direction === Direction.Forwards ? sequence.length - 1 : 0;
  if (direction === Direction.Forwards) {
    return sequence[sequence.length - 1] + diff;
  }
  return sequence[0] - diff;
};
