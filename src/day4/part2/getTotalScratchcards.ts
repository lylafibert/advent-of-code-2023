import { getWinningNumbersCount } from "../getWinningNumbersCount";

interface CardNumbers {
  card: number[];
  myNumbers: number[];
}

type CardEntry = [string, CardNumbers];

export const getTotalScratchCards = (
  scratchCards: Record<number, CardNumbers>
): number => {
  let cardsToProcess: CardEntry[] = [...Object.entries(scratchCards)];

  const cardProduction: number[] = [];

  let totalCards = cardsToProcess.length;

  for (let i = cardsToProcess.length - 1; i >= 0; i--) {
    const currentCard = cardsToProcess[i][1];
    const winCount = getWinningNumbersCount(currentCard);

    let sum = winCount;

    for (let x = 0; x < winCount; x++) {
      sum += cardProduction[x];
    }
    totalCards += sum;
    cardProduction.unshift(sum);
  }

  return totalCards;
};
