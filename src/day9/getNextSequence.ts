import { Sequence } from "./types";

export const getNextSequence = (
  currentSequence: Sequence
): { nextSequence: Sequence; isAllZeroes: boolean } => {
  const nextSequence: Sequence = [];
  let isAllZeroes = true;

  for (let i = 0; i < currentSequence.length - 1; i++) {
    const currentValue = currentSequence[i];
    const nextValue = currentSequence[i + 1];

    const newValue = nextValue - currentValue;

    if (isAllZeroes && newValue !== 0) isAllZeroes = false;

    nextSequence.push(newValue);
  }
  return { nextSequence, isAllZeroes };
};
