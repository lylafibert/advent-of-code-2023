import { Sequence } from "./types";

export const getNextValue = ({
  sequence,
  diff,
}: {
  sequence: Sequence;
  diff: number;
}): number => sequence[sequence.length - 1] + diff;
