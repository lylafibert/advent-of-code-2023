import { parseGameRecord } from "./parseGameRecord";

describe("parseGameRecord", () => {
  it("correctly parses a game record", () => {
    expect(
      parseGameRecord("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
    ).toEqual({
      id: 1,
      game: [
        { red: 4, blue: 3, green: 0 },
        { red: 1, green: 2, blue: 6 },
        { green: 2, blue: 0, red: 0 },
      ],
    });

    expect(
      parseGameRecord(
        "Game 45: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
      )
    ).toEqual({
      id: 45,
      game: [
        { red: 20, blue: 6, green: 8 },
        { red: 4, green: 13, blue: 5 },
        { green: 5, blue: 0, red: 1 },
      ],
    });
  });
});
