import { sortHands } from "./sortHands";
import { HandData } from "./types";

export const getTotalWinnings = (hands: HandData[]): number => {
  const sortedHands = sortHands(hands);
  return sortedHands.reduce((winnings, { bid, hand }, index) => {
    return winnings + (index + 1) * bid;
  }, 0);
};
