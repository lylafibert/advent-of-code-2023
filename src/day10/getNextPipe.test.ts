import { getNextPipe } from "./getNextPipe";
import { Direction, Pipe } from "./types";

const EXAMPLE_DIAGRAM_A = ["-L|F7", "7S-7|", "L|7||", "-L-J|", "L|-JF"];
const EXAMPLE_DIAGRAM_B = ["7-F7-", ".FJ|7", "SJLL7", "|F--J", "LJ.LJ"];

// .....
// .F-7.
// .|.|.
// .L-J.
// .....

// ..F7.
// .FJ|.
// SJ.L7
// |F--J
// LJ...

describe("getNextPipe", () => {
  it("returns information for the next pipe", () => {
    expect(
      getNextPipe({
        step: {
          pipe: Pipe.NorthSouth,
          position: [1, 2],
          comingFrom: Direction.North,
        },
        diagram: EXAMPLE_DIAGRAM_A,
      })
    ).toEqual({
      position: [1, 3],
      pipe: Pipe.NorthEast,
      comingFrom: Direction.North,
    });
    expect(
      getNextPipe({
        step: {
          pipe: Pipe.NorthEast,
          position: [3, 2],
          comingFrom: Direction.East,
        },
        diagram: EXAMPLE_DIAGRAM_B,
      })
    ).toEqual({
      position: [3, 1],
      pipe: Pipe.NorthSouth,
      comingFrom: Direction.South,
    });
    expect(
      getNextPipe({
        step: {
          position: [3, 2],
          pipe: Pipe.NorthEast,
          comingFrom: Direction.North,
        },
        diagram: EXAMPLE_DIAGRAM_B,
      })
    ).toEqual({
      position: [4, 2],
      pipe: Pipe.SouthWest,
      comingFrom: Direction.West,
    });
  });
});
