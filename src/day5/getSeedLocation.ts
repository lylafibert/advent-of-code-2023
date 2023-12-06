import { getDestinationNumber } from "./getDestinationNumber";
import { Almanac, NumberMap } from "./types";

const maps = [
  "seed-soil",
  "soil-fertilizer",
  "fertilizer-water",
  "water-light",
  "light-temperature",
  "temperature-humidity",
  "humidity-location",
];

export const getSeedLocation = ({
  seedNumber,
  orderedAlmanac,
}: {
  seedNumber: number;
  orderedAlmanac: Almanac;
}): number => {
  return maps.reduce((sourceNumber, mapKey) => {
    // @ts-ignore

    // console.log({ sourceNumber, currentMap: ordredAlmanac[mapKey] });
    return getDestinationNumber({
      sourceNumber,
      // @ts-ignore
      orderedMap: orderedAlmanac[mapKey],
    });
  }, seedNumber);
};

const orderMap = (numberMap: NumberMap): NumberMap =>
  numberMap.sort((a, b) => a[1] - b[1]);
