import { getNextDirection } from "./getNextDirection";
import { Direction, Pipe } from "./types";

describe("getNextDirection", () => {
  it("returns the next direction for a vertical pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.NorthSouth, comingFrom: Direction.North })
    ).toEqual(Direction.South);
    expect(
      getNextDirection({ pipe: Pipe.NorthSouth, comingFrom: Direction.South })
    ).toEqual(Direction.North);
  });

  it("returns the next direction for a horizontal pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.EastWest, comingFrom: Direction.East })
    ).toEqual(Direction.West);
    expect(
      getNextDirection({ pipe: Pipe.EastWest, comingFrom: Direction.West })
    ).toEqual(Direction.East);
  });

  it("returns the next direction for a NorthEast pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.NorthEast, comingFrom: Direction.East })
    ).toEqual(Direction.North);
    expect(
      getNextDirection({ pipe: Pipe.NorthEast, comingFrom: Direction.North })
    ).toEqual(Direction.East);
  });
  it("returns the next direction for a NorthWest pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.NorthWest, comingFrom: Direction.West })
    ).toEqual(Direction.North);
    expect(
      getNextDirection({ pipe: Pipe.NorthWest, comingFrom: Direction.North })
    ).toEqual(Direction.West);
  });

  it("returns the next direction for a SouthWest pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.SouthWest, comingFrom: Direction.West })
    ).toEqual(Direction.South);
    expect(
      getNextDirection({ pipe: Pipe.SouthWest, comingFrom: Direction.South })
    ).toEqual(Direction.West);
  });

  it("returns the next direction for a SouthEast pipe", () => {
    expect(
      getNextDirection({ pipe: Pipe.SouthEast, comingFrom: Direction.East })
    ).toEqual(Direction.South);
    expect(
      getNextDirection({ pipe: Pipe.SouthEast, comingFrom: Direction.South })
    ).toEqual(Direction.East);
  });
});
