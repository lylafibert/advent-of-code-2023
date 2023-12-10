export type Position = [number, number];

export enum Pipe {
  NorthSouth = "|",
  EastWest = "-",
  NorthEast = "L",
  NorthWest = "J",
  SouthWest = "7",
  SouthEast = "F",
}

export enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

export interface Step {
  pipe: Pipe;
  position: Position;
  comingFrom: Direction;
}

export type Diagram = string[];
