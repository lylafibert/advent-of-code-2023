import { Card, Hand, HandType } from "./types";
import { getHandType as getHandTypeNoJokers } from "../part1/getHandType";

type CardCount = Record<string, number>;

export const getHandType = (hand: Hand): HandType => {
  const handCards = hand.split("") as Card[];
  const handInfo: CardCount = {};

  let jokerCount = 0;

  handCards.forEach((card) => {
    if (card === Card.Joker) {
      jokerCount++;
    } else {
      const cardCount = handInfo[card] ?? 0;
      handInfo[card] = cardCount + 1;
    }
  });

  if (!jokerCount) return getHandTypeNoJokers(hand);

  const cardCounts = Object.values(handInfo).sort((a, b) => b - a);

  if (jokerCount === 5 || cardCounts.length === 1) return HandType.FiveOfAKind;

  if (
    jokerCount === 3 ||
    cardCounts[0] === 3 ||
    (jokerCount === 2 && cardCounts[0] === 2)
  )
    return HandType.FourOfAKind;

  if (cardCounts[0] === 2 && cardCounts[1] === 2) return HandType.FullHouse;

  if (jokerCount === 2 || cardCounts[0] === 2) return HandType.ThreeOfAKind;

  return HandType.OnePair;
};
