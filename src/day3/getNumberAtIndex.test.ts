import { getNumberAtIndex } from "./getNumberAtIndex";

describe("getNumberAtIndex", () => {
  it("returns the number at a given index in the line", () => {
    expect(getNumberAtIndex({ line: "460..114..", startIndex: 0 })).toEqual(
      "460"
    );
    expect(getNumberAtIndex({ line: "467..1100..", startIndex: 5 })).toEqual(
      "1100"
    );
    expect(getNumberAtIndex({ line: "..35..633.", startIndex: 6 })).toEqual(
      "633"
    );
    expect(getNumberAtIndex({ line: "..35..633.", startIndex: 6 })).toEqual(
      "633"
    );
    expect(getNumberAtIndex({ line: "...7..633.", startIndex: 3 })).toEqual(
      "7"
    );
    expect(getNumberAtIndex({ line: "...7...2111", startIndex: 7 })).toEqual(
      "2111"
    );
  });
});
