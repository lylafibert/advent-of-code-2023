import { getWinningNumbersCount } from "../getWinningNumbersCount";

export const getCardPoints = ({
  card,
  myNumbers,
}: {
  card: number[];
  myNumbers: number[];
}): number => {
  const winningNumbersCount = getWinningNumbersCount({ card, myNumbers });

  if (winningNumbersCount) {
    let points = 1;

    for (let i = 1; i < winningNumbersCount; i++) {
      points *= 2;
    }
    return points;
  }
  return 0;
};
