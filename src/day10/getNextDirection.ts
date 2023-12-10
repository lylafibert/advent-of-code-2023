import { Direction, Pipe } from "./types";

type DirectionMap = Record<Pipe, Record<string, Direction>>;
const PIPE_DIRECTION_MAP: DirectionMap = {
  [Pipe.NorthSouth]: {
    [Direction.North]: Direction.South,
    [Direction.South]: Direction.North,
  },
  [Pipe.EastWest]: {
    [Direction.East]: Direction.West,
    [Direction.West]: Direction.East,
  },
  [Pipe.NorthEast]: {
    [Direction.North]: Direction.East,
    [Direction.East]: Direction.North,
  },
  [Pipe.NorthWest]: {
    [Direction.North]: Direction.West,
    [Direction.West]: Direction.North,
  },
  [Pipe.SouthWest]: {
    [Direction.South]: Direction.West,
    [Direction.West]: Direction.South,
  },
  [Pipe.SouthEast]: {
    [Direction.South]: Direction.East,
    [Direction.East]: Direction.South,
  },
};

export const getNextDirection = ({
  pipe,
  comingFrom,
}: {
  pipe: Pipe;
  comingFrom: Direction;
}): Direction => PIPE_DIRECTION_MAP[pipe][comingFrom];
