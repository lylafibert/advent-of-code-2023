import { getNum, getPointsSum } from "./getPointsSum";
import { scratchCards } from "../scratchCards";

type cardInfo = {
  card: number[];
  myNumbers: number[];
};

const exampleScratchcards: Record<number, cardInfo> = {
  hello: "wjat",
  1: {
    card: [41, 48, 83, 86, 17],
    myNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    // hi: 5,
    // whatup: "345",
    // fields: [2, 3, 45],
  },
  2: {
    card: [13, 32, 20, 16, 61],
    myNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
  },
  3: { card: [1, 21, 53, 59, 44], myNumbers: [69, 82, 63, 72, 16, 21, 14, 1] },
  4: { card: [41, 92, 73, 84, 69], myNumbers: [59, 84, 76, 51, 58, 5, 54, 83] },
  5: {
    card: [87, 83, 26, 28, 32],
    myNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
  },
  6: {
    card: [31, 18, 13, 56, 72],
    myNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
  },
};

describe("getPointsSum", () => {
  it("returns how many points a card is worth", () => {
    expect(getPointsSum(exampleScratchcards)).toEqual(13);
    expect(getPointsSum(scratchCards)).toEqual(21821);
  });
});
