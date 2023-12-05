import { getWinningNumbersCount } from "../getWinningNumbersCount";

interface CardNumbers {
  card: number[];
  myNumbers: number[];
}

type CardEntry = [string, CardNumbers];

export const getTotalScratchCards = (
  scratchCards: Record<number, CardNumbers>
): number => {
  let cardCount = 0;
  let cardsToProcess: CardEntry[] = [...Object.entries(scratchCards)];

  while (cardsToProcess.length) {
    cardCount++;
    const currentCard = cardsToProcess.shift()!;

    const winningNumbersCount = getWinningNumbersCount(currentCard[1]);

    const currentCardId = parseInt(currentCard[0]);
    for (
      let i = currentCardId + 1;
      i < currentCardId + winningNumbersCount + 1;
      i++
    ) {
      const nextCard: CardEntry = [`${i}`, scratchCards[i]];

      cardsToProcess.push(nextCard);
    }
  }

  return cardCount;
};
