import { sortHands } from "./sortHands";

const exampleHands = [
  { hand: "T8J69", bid: 161 },
  { hand: "TJ5Q2", bid: 289 },
  { hand: "32T3K", bid: 765 },
  { hand: "T55J5", bid: 684 },
  { hand: "JJJJJ", bid: 735 },
  { hand: "QQQQQ", bid: 182 },
  { hand: "KK677", bid: 28 },
  { hand: "J6666", bid: 355 },
  { hand: "KTJJT", bid: 220 },
  { hand: "QQQJA", bid: 483 },
];

const sortedHands = [
  { hand: "32T3K", bid: 765 },
  { hand: "TJ5Q2", bid: 289 },
  { hand: "T8J69", bid: 161 },
  { hand: "KK677", bid: 28 },
  { hand: "T55J5", bid: 684 },
  { hand: "QQQJA", bid: 483 },
  { hand: "KTJJT", bid: 220 },
  { hand: "JJJJJ", bid: 735 },
  { hand: "J6666", bid: 355 },
  { hand: "QQQQQ", bid: 182 },
];

describe("sortHands", () => {
  it("identifies a five of a kind hand", () => {
    expect(sortHands(exampleHands)).toEqual(sortedHands);
    expect(
      sortHands([
        { hand: "QQQQ2", bid: 161 },
        { hand: "JKKK2", bid: 289 },
      ])
    ).toEqual([
      { hand: "JKKK2", bid: 289 },
      { hand: "QQQQ2", bid: 161 },
    ]);
  });
});
