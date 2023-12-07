import { Card, Hand, HandType } from "./types";

type CardCount = Record<string, number>;

export const getHandType = (hand: Hand): HandType => {
  const handCards = hand.split("") as Card[];
  const handInfo: CardCount = {};

  handCards.forEach((card) => {
    const cardCount = handInfo[card] ?? 0;
    handInfo[card] = cardCount + 1;
  });

  const cardCounts = Object.values(handInfo).sort((a, b) => b - a);

  const numberOfDifferentCards = cardCounts.length;

  switch (numberOfDifferentCards) {
    case 1:
      return HandType.FiveOfAKind;
    case 2:
      if (cardCounts[0] === 4) return HandType.FourOfAKind;
      return HandType.FullHouse;
    case 3:
      if (cardCounts[0] === 3) return HandType.ThreeOfAKind;
      return HandType.TwoPair;
    case 4:
      return HandType.OnePair;

    default:
      return HandType.HighCard;
  }
};
