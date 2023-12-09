import { sortHands } from "./sortHands";
import { HandData } from "./types";

export const getTotalWinnings = (hands: HandData[]): number => {
  const sortedHands = sortHands(hands);

  return sortedHands.reduce((totalWinnings, { hand, bid }, index) => {
    const rank = index + 1;
    const winnings = rank * bid;

    return totalWinnings + winnings;
  }, 0);
};
