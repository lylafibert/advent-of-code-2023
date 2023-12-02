import { getCubesRequriedForGame } from "./getCubesRequiredForGame";

describe("getCubesRequiredForGame", () => {
  it("returns the minimum cubes of each colour required to make a game possible", () => {
    expect(
      getCubesRequriedForGame([
        { blue: 3, red: 4, green: 0 },
        { red: 1, blue: 6, green: 2 },
        { green: 2, red: 0, blue: 0 },
      ])
    ).toEqual({ blue: 6, red: 4, green: 2 });
  });
});
