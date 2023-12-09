import { getNextElement } from "../getNextElement";
import { Instruction, Network } from "../types";

export const countGhostSteps = ({
  network,
  instructions: instructionString,
}: {
  network: Network;
  instructions: string;
}): number => {
  let stepCount = 0;
  let allElementsEndInZ = false;

  let currentElements = Object.keys(network).filter((element) =>
    element.endsWith("A")
  );

  const instructions = instructionString.split("") as Instruction[];

  while (!allElementsEndInZ && false) {
    const currentInstruction = instructions.shift()!;
    let newElementsEndInZ = true;

    const newElements = currentElements.map((currentElement) => {
      const newElement = getNextElement({
        network,
        currentElement,
        instruction: currentInstruction,
      });
      if (newElementsEndInZ) {
        if (!newElement.endsWith("Z")) newElementsEndInZ = false;
      }
      return newElement;
    });
    currentElements = newElements;
    stepCount++;
    instructions.push(currentInstruction);
    if (newElementsEndInZ) allElementsEndInZ = true;
  }

  return stepCount;
};
