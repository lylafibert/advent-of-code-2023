import { getNextValueSum } from "./getNextValueSum";
import { HISTORIES } from "./histories";

describe("getNextValueSum", () => {
  it("returns the next value in a history sequence", () => {
    expect(
      getNextValueSum([
        [0, 3, 6, 9, 12, 15],
        [1, 3, 6, 10, 15, 21],
        [10, 13, 16, 21, 30, 45],
      ])
    ).toEqual(114);
    expect(getNextValueSum(HISTORIES)).toEqual(1861775706);
  });
});
