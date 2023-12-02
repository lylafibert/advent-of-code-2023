import { Colour, Cubes, Game } from "./types";

interface ParsedGameRecord {
  id: number;
  game: Game;
}

export const parseGameRecord = (gameRecord: string): ParsedGameRecord => {
  const [gameId, handfuls] = gameRecord.split(":");

  const id = parseInt(gameId.split(" ")[1]);

  const game = handfuls.split(";").map((handful) => {
    const Cubes: Cubes = { red: 0, green: 0, blue: 0 };

    const colourCounts = handful.split(",");

    colourCounts.forEach((colourCount) => {
      const [, countString, colour] = colourCount.split(" ");
      Cubes[colour as Colour] = parseInt(countString);
    });

    return Cubes;
  });

  return { id, game };
};
