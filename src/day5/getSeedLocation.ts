import { getDestinationNumber } from "./getDestinationNumber";
import { Almanac, NumberMap } from "./types";

export const getSeedLocation = ({
  seedNumber,
  orderedAlmanac,
  mapKeys,
}: {
  seedNumber: number;
  mapKeys: string[];
  orderedAlmanac: Almanac;
}): number => {
  return mapKeys.reduce((sourceNumber, mapKey) => {
    return getDestinationNumber({
      sourceNumber,
      orderedMap: orderedAlmanac[mapKey],
    });
  }, seedNumber);
};

const orderMap = (numberMap: NumberMap): NumberMap =>
  numberMap.sort((a, b) => a[1] - b[1]);
