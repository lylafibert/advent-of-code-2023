import { Position, Pipe, Direction, Diagram } from "./types";

const CONNECTING_NORTH_PIPES = [
  Pipe.NorthSouth,
  Pipe.SouthWest,
  Pipe.SouthEast,
];
const CONNECTING_EAST_PIPES = [Pipe.EastWest, Pipe.SouthWest, Pipe.NorthWest];
const CONNECTING_SOUTH_PIPES = [
  Pipe.NorthSouth,
  Pipe.NorthEast,
  Pipe.NorthWest,
];
const CONNECTING_WEST_PIPES = [Pipe.EastWest, Pipe.SouthEast, Pipe.NorthEast];

export const getStartingPipes = ({
  diagram,
  currentPosition,
}: {
  diagram: Diagram;
  currentPosition: Position;
}): { position: Position; pipe: Pipe; direction: Direction }[] => {
  const connectingPipes: {
    position: Position;
    pipe: Pipe;
    direction: Direction;
  }[] = [];

  const [x, y] = currentPosition;

  const north: Position = [x, y - 1];
  const east: Position = [x + 1, y];
  const south: Position = [x, y + 1];
  const west: Position = [x - 1, y];

  const adjacentPipes = [
    {
      position: north,
      validConnectingPipes: CONNECTING_NORTH_PIPES,
      direction: Direction.North,
    },
    {
      position: east,
      validConnectingPipes: CONNECTING_EAST_PIPES,
      direction: Direction.East,
    },
    {
      position: south,
      validConnectingPipes: CONNECTING_SOUTH_PIPES,
      direction: Direction.South,
    },
    {
      position: west,
      validConnectingPipes: CONNECTING_WEST_PIPES,
      direction: Direction.West,
    },
  ];

  for (let i = 0; i < 4 && connectingPipes.length < 2; i++) {
    const { position, validConnectingPipes, direction } = adjacentPipes[i];

    const connectingPipe = getConnectingPipe({
      position,
      connectingPipes: validConnectingPipes,
      diagram,
    });

    if (connectingPipe) {
      connectingPipes.push({ position, pipe: connectingPipe, direction });
    }
  }

  return connectingPipes;
};

const getConnectingPipe = ({
  position,
  connectingPipes,
  diagram,
}: {
  position: Position;
  connectingPipes: Pipe[];
  diagram: Diagram;
}): Pipe | undefined => {
  const [x, y] = position;
  const pipe = diagram[y][x] as Pipe;

  if (connectingPipes.includes(pipe)) return pipe;
};
