import { getNumberAtIndex } from "./getNumberAtIndex";

describe("getNumberAtIndex", () => {
  it("returns the number at a given index in the row", () => {
    expect(getNumberAtIndex({ row: "460..114..", index: 0 })).toEqual(460);
    expect(getNumberAtIndex({ row: "467..1100..", index: 8 })).toEqual(1100);
    expect(getNumberAtIndex({ row: "..35..633.", index: 7 })).toEqual(633);
    expect(getNumberAtIndex({ row: "..35..633.", index: 8 })).toEqual(633);
    expect(getNumberAtIndex({ row: "...7..633.", index: 3 })).toEqual(7);
    expect(getNumberAtIndex({ row: "...7...2111", index: 9 })).toEqual(2111);
  });
});
