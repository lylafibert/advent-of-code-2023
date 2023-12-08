import { getNextElement } from "./getNextElement";
import { Instruction, Network } from "./types";

export const countSteps = ({
  network,
  instructions: instructionString,
}: {
  network: Network;
  instructions: string;
}): number => {
  let currentElement = "AAA";
  let stepCount = 0;

  const instructions = instructionString.split("") as Instruction[];

  while (currentElement !== "ZZZ") {
    const currentInstruction = instructions.shift()!;
    currentElement = getNextElement({
      network,
      currentElement,
      instruction: currentInstruction,
    });
    stepCount++;
    instructions.push(currentInstruction);
  }

  return stepCount;
};
