import { OPPOSITE_DIRECTION_MAP, getNextPipe } from "./getNextPipe";
import { getStartingPipes } from "./getStartingPipes";
import { Diagram, Position } from "./types";

export const getFarthestSteps = ({
  diagram,
  startPosition,
}: {
  diagram: Diagram;
  startPosition: Position;
}): number => {
  const startingPipes = getStartingPipes({ diagram, startPosition });

  let steps = 1;
  let step = {
    position: startingPipes[0].position,
    comingFrom: OPPOSITE_DIRECTION_MAP[startingPipes[0].direction],
    pipe: startingPipes[0].pipe,
  };

  while (
    !(
      step.position[0] === startPosition[0] &&
      step.position[1] === startPosition[1]
    )
  ) {
    const newStep = getNextPipe({ step, diagram });

    step = newStep;
    steps++;
  }
  return steps / 2;
};
