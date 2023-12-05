import { getCardPoints } from "./getCardPoints";

type cardInfo = {
  card: number[];
  myNumbers: number[];
};

export const getPointsSum = (scratchCards: Record<number, cardInfo>): number =>
  Object.values(scratchCards).reduce(
    (sum, currentCard) => sum + getCardPoints(currentCard),
    0
  );

export const getNum = (hi: number) => {};
