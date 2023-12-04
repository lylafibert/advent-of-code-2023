import { getCardPoints } from "./getCardPoints";

export const getPointsSum = (
  scratchCards: {
    card: number[];
    myNumbers: number[];
  }[]
): number =>
  scratchCards.reduce(
    (sum, currentCard) => sum + getCardPoints(currentCard),
    0
  );
