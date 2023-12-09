import { extrapolateHistory } from "./extrapolateHistory";

describe("extrapolateHistory", () => {
  it("extrapolates the next value in the history", () => {
    expect(
      extrapolateHistory([
        [0, 0, 0, 0],
        [3, 3, 3, 3, 3],
        [0, 3, 6, 9, 12, 15],
      ])
    ).toEqual(18);
    expect(
      extrapolateHistory([
        [0, 0, 0],
        [1, 1, 1, 1],
        [2, 3, 4, 5, 6],
        [1, 3, 6, 10, 15, 21],
      ])
    ).toEqual(28);
    expect(
      extrapolateHistory([
        [0, 0],
        [2, 2, 2],
        [0, 2, 4, 6],
        [3, 3, 5, 9, 15],
        [10, 13, 16, 21, 30, 45],
      ])
    ).toEqual(68);
  });
});
