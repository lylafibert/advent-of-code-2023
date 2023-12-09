import { getNextValueSum } from "./getNextValueSum";
import { HISTORIES } from "./histories";
import { Direction } from "./types";

describe("getNextValueSum", () => {
  it("returns the sum of next values in the histories", () => {
    expect(
      getNextValueSum({
        histories: [
          [0, 3, 6, 9, 12, 15],
          [1, 3, 6, 10, 15, 21],
          [10, 13, 16, 21, 30, 45],
        ],
        direction: Direction.Forwards,
      })
    ).toEqual(114);
    expect(
      getNextValueSum({ histories: HISTORIES, direction: Direction.Forwards })
    ).toEqual(1861775706);
  });
  it("returns the sum of previous values in the histories", () => {
    expect(
      getNextValueSum({
        histories: [
          [0, 3, 6, 9, 12, 15],
          [1, 3, 6, 10, 15, 21],
          [10, 13, 16, 21, 30, 45],
        ],
        direction: Direction.Backwards,
      })
    ).toEqual(2);
    expect(
      getNextValueSum({ histories: HISTORIES, direction: Direction.Backwards })
    ).toEqual(1082);
  });
});
