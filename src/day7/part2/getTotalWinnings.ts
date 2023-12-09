import { sortHands } from "./sortHands";
import { HandData } from "./types";

export const getTotalWinnings = (hands: HandData[]): number => {
  const sortedHands = sortHands(hands);

  return sortedHands.reduce(
    (winnings, { bid }, index) => winnings + (index + 1) * bid,
    0
  );
};
