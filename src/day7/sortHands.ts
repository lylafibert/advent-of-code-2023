import { CARDS } from "./constants";
import { getHandType } from "./getHandType";
import { Card, HandData } from "./types";

export const sortHands = (hands: HandData[]): HandData[] => {
  hands.sort((a, b) => {
    const handA = a.hand;
    const handB = b.hand;

    const handTypeA = getHandType(handA);
    const handTypeB = getHandType(handB);

    let diff = handTypeB - handTypeA;

    if (diff === 0) {
      const handACards = handA.split("");
      const handBCards = handB.split("");

      for (let i = 0; i < 5 && diff === 0; i++) {
        diff =
          CARDS.indexOf(handBCards[i] as Card) -
          CARDS.indexOf(handACards[i] as Card);
      }
    }
    return diff;
  });
  return hands;
};
