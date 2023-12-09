import { getNextValueInHistory } from "./getNextValueInHistory";
import { Direction } from "./types";

describe("getNextValueInHistory", () => {
  it("returns the next value in a history sequence", () => {
    expect(
      getNextValueInHistory({
        history: [0, 3, 6, 9, 12, 15],
        direction: Direction.Forwards,
      })
    ).toEqual(18);
    expect(
      getNextValueInHistory({
        history: [1, 3, 6, 10, 15, 21],
        direction: Direction.Forwards,
      })
    ).toEqual(28);
    expect(
      getNextValueInHistory({
        history: [10, 13, 16, 21, 30, 45],
        direction: Direction.Forwards,
      })
    ).toEqual(68);
  });
});
