import { INSTRUCTION_INDEX_MAP } from "./constants";
import { Instruction, Network } from "./types";

export const getNextElement = ({
  network,
  currentElement,
  instruction,
}: {
  network: Network;
  currentElement: string;
  instruction: Instruction;
}): string => {
  const elementIndex = INSTRUCTION_INDEX_MAP[instruction];
  return network[currentElement][elementIndex];
};
