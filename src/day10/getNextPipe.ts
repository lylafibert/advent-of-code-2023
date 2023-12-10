import { getNextDirection } from "./getNextDirection";
import { Diagram, Direction, Pipe, Position, Step } from "./types";

export const OPPOSITE_DIRECTION_MAP = {
  [Direction.North]: Direction.South,
  [Direction.East]: Direction.West,
  [Direction.South]: Direction.North,
  [Direction.West]: Direction.East,
};

export const getNextPipe = ({
  step,
  diagram,
}: {
  step: Step;
  diagram: Diagram;
}): Step => {
  const { pipe, position, comingFrom } = step;

  const direction = getNextDirection({ pipe, comingFrom });
  const newPosition = getNewPosition({ position, direction });
  const [x, y] = newPosition;
  const newPipe = diagram[y][x] as Pipe;
  const newComingFrom = OPPOSITE_DIRECTION_MAP[direction];

  return {
    pipe: newPipe,
    position: newPosition,
    comingFrom: newComingFrom,
  };
};

const getNewPosition = ({
  position,
  direction,
}: {
  position: Position;
  direction: Direction;
}): Position => {
  const [x, y] = position;
  switch (direction) {
    case Direction.North:
      return [x, y - 1];
    case Direction.East:
      return [x + 1, y];
    case Direction.South:
      return [x, y + 1];
    default:
      return [x - 1, y];
  }
};
