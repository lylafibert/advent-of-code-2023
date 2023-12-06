import { countWaysToWin } from "./countWaysToWin";

describe("countWaysToWin", () => {
  it("returns the number of ways there are to win a race", () => {
    expect(
      countWaysToWin({
        raceDuration: 7,
        recordDistance: 9,
      })
    ).toEqual(4);

    expect(
      countWaysToWin({
        raceDuration: 15,
        recordDistance: 40,
      })
    ).toEqual(8);

    expect(
      countWaysToWin({
        raceDuration: 30,
        recordDistance: 200,
      })
    ).toEqual(9);

    expect(
      countWaysToWin({
        raceDuration: 71530,
        recordDistance: 940200,
      })
    ).toEqual(71503);

    expect(
      countWaysToWin({
        raceDuration: 35937366,
        recordDistance: 212206012011044,
      })
    ).toEqual(21039729);
  });
});
