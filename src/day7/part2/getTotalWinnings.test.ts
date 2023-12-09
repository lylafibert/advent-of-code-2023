import { getTotalWinnings } from "./getTotalWinnings";
import { hands } from "../hands";

const exampleHands = [
  { hand: "32T3K", bid: 765 },
  { hand: "T55J5", bid: 684 },
  { hand: "KK677", bid: 28 },
  { hand: "KTJJT", bid: 220 },
  { hand: "QQQJA", bid: 483 },
];

describe("getTotalWinnings", () => {
  it("returns the total winnings of a set of hands", () => {
    expect(getTotalWinnings(exampleHands)).toEqual(5905);
    expect(getTotalWinnings(hands)).toEqual(253907829);
  });
});
