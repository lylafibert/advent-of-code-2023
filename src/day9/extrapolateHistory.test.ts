import { extrapolateHistory } from "./extrapolateHistory";
import { Direction } from "./types";

describe("extrapolateHistory", () => {
  it("extrapolates the next value in the history", () => {
    expect(
      extrapolateHistory({
        sequences: [
          [0, 0, 0, 0],
          [3, 3, 3, 3, 3],
          [0, 3, 6, 9, 12, 15],
        ],
        direction: Direction.Forwards,
      })
    ).toEqual(18);
    expect(
      extrapolateHistory({
        sequences: [
          [0, 0, 0],
          [1, 1, 1, 1],
          [2, 3, 4, 5, 6],
          [1, 3, 6, 10, 15, 21],
        ],
        direction: Direction.Forwards,
      })
    ).toEqual(28);
    expect(
      extrapolateHistory({
        sequences: [
          [0, 0],
          [2, 2, 2],
          [0, 2, 4, 6],
          [3, 3, 5, 9, 15],
          [10, 13, 16, 21, 30, 45],
        ],
        direction: Direction.Forwards,
      })
    ).toEqual(68);
  });
});
