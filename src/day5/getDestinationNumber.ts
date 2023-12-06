import { NumberMap } from "./types";

export const getDestinationNumber = ({
  sourceNumber,
  orderedMap,
}: {
  sourceNumber: number;
  orderedMap: NumberMap;
}): number => {
  console.log({ sourceNumber, orderedMap });
  if (orderedMap[0][1] > sourceNumber) return sourceNumber;

  const mapIndex =
    orderedMap.findIndex(([, sourceStart]) => sourceStart > sourceNumber) - 1;

  const [destinationStart, sourceStart, range] = orderedMap[mapIndex];

  const sourceNumberIsInRange = sourceStart + range >= sourceNumber;

  if (!sourceNumberIsInRange) return sourceNumber;

  const destinationNumber = sourceNumber - sourceStart + destinationStart;
  return destinationNumber;
};
