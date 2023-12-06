import { NumberMap } from "./types";

export const getDestinationNumber = ({
  sourceNumber,
  orderedMap,
}: {
  sourceNumber: number;
  orderedMap: NumberMap;
}): number => {
  if (orderedMap[0][1] > sourceNumber) return sourceNumber;

  let mapLine = orderedMap[orderedMap.length - 1];

  if (mapLine[1] > sourceNumber) {
    const mapIndex =
      orderedMap.findIndex(([, sourceStart]) => sourceStart > sourceNumber) - 1;
    mapLine = orderedMap[mapIndex];
  }

  const [destinationStart, sourceStart, range] = mapLine;

  const sourceNumberIsInRange = sourceStart + range >= sourceNumber;

  if (!sourceNumberIsInRange) return sourceNumber;

  const destinationNumber = sourceNumber - sourceStart + destinationStart;
  return destinationNumber;
};
