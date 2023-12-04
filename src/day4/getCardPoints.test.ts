import { getCardPoints } from "./getCardPoints";

describe("getCardPoints", () => {
  it("returns how many points a card is worth", () => {
    expect(
      getCardPoints({
        card: [41, 48, 83, 86, 17],
        myNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
      })
    ).toEqual(8);

    expect(
      getCardPoints({
        card: [13, 32, 20, 16, 61],
        myNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
      })
    ).toEqual(2);

    expect(
      getCardPoints({
        card: [1, 21, 53, 59, 44],
        myNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
      })
    ).toEqual(2);

    expect(
      getCardPoints({
        card: [41, 92, 73, 84, 69],
        myNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
      })
    ).toEqual(1);

    expect(
      getCardPoints({
        card: [87, 83, 26, 28, 32],
        myNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
      })
    ).toEqual(0);
    expect(
      getCardPoints({
        card: [31, 18, 13, 56, 72],
        myNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
      })
    ).toEqual(0);
  });
});
