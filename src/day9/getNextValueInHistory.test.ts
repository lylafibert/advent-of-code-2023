import { getNextValueInHistory } from "./getNextValueInHistory";

describe("getNextValueInHistory", () => {
  it("returns the next value in a history sequence", () => {
    expect(getNextValueInHistory([0, 3, 6, 9, 12, 15])).toEqual(18);
    expect(getNextValueInHistory([1, 3, 6, 10, 15, 21])).toEqual(28);
    expect(getNextValueInHistory([10, 13, 16, 21, 30, 45])).toEqual(68);
  });
});
