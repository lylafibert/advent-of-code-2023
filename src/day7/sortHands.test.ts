import { sortHands } from "./sortHands";

const exampleHands = [
  { hand: "32T3K", bid: 765 },
  { hand: "T55J5", bid: 684 },
  { hand: "KK677", bid: 28 },
  { hand: "KTJJT", bid: 220 },
  { hand: "QQQJA", bid: 483 },
];

const sortedHands = [
  { hand: "32T3K", bid: 765 },
  { hand: "KTJJT", bid: 220 },
  { hand: "KK677", bid: 28 },
  { hand: "T55J5", bid: 684 },
  { hand: "QQQJA", bid: 483 },
];

describe("sortHands", () => {
  it("identifies a five of a kind hand", () => {
    expect(sortHands(exampleHands)).toEqual(sortedHands);
  });
});
