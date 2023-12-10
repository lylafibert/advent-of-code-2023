import { getStartingPipes } from "./getStartingPipes";
import { DIAGRAM } from "./diagram";
import { Direction, Pipe } from "./types";

const EXAMPLE_DIAGRAM_A = ["-L|F7", "7S-7|", "L|7||", "-L-J|", "L|-JF"];
const EXAMPLE_DIAGRAM_B = ["7-F7-", ".FJ|7", "SJLL7", "|F--J", "LJ.LJ"];

describe("getStartingPipes", () => {
  it("returns position of the two pipes connected to the starting pipe", () => {
    expect(
      getStartingPipes({ diagram: EXAMPLE_DIAGRAM_A, currentPosition: [1, 1] })
    ).toEqual([
      { position: [2, 1], pipe: Pipe.EastWest, direction: Direction.East },
      { position: [1, 2], pipe: Pipe.NorthSouth, direction: Direction.South },
    ]);
    expect(
      getStartingPipes({ diagram: EXAMPLE_DIAGRAM_B, currentPosition: [0, 2] })
    ).toEqual([
      { position: [1, 2], pipe: Pipe.NorthWest, direction: Direction.East },
      { position: [0, 3], pipe: Pipe.NorthSouth, direction: Direction.South },
    ]);
  });
  it("returns position of the two pipes connected to the starting pipe in the puzzle", () => {
    expect(
      getStartingPipes({ diagram: DIAGRAM, currentPosition: [98, 94] })
    ).toEqual([
      { position: [99, 94], pipe: Pipe.EastWest, direction: Direction.East },
      { position: [97, 94], pipe: Pipe.NorthEast, direction: Direction.West },
    ]);
  });
});
