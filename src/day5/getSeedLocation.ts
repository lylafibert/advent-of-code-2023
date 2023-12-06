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
  almanac,
}: {
  seedNumber: number;
  almanac: Almanac;
}): number => {
  const soilNumber = getDestinationNumber({
    sourceNumber: seedNumber,
    orderedMap: orderMap(almanac["seed-soil"]),
  });

  const fertilizerNumber = getDestinationNumber({
    sourceNumber: soilNumber,
    orderedMap: orderMap(almanac["soil-fertilizer"]),
  });

  const waterNumber = getDestinationNumber({
    sourceNumber: fertilizerNumber,
    orderedMap: orderMap(almanac["fertilizer-water"]),
  });

  const lightNumber = getDestinationNumber({
    sourceNumber: waterNumber,
    orderedMap: orderMap(almanac["water-light"]),
  });

  const temperatureNumber = getDestinationNumber({
    sourceNumber: lightNumber,
    orderedMap: orderMap(almanac["light-temperature"]),
  });

  const humidityNumber = getDestinationNumber({
    sourceNumber: temperatureNumber,
    orderedMap: orderMap(almanac["temperature-humidity"]),
  });

  const locationNumber = getDestinationNumber({
    sourceNumber: humidityNumber,
    orderedMap: orderMap(almanac["humidity-location"]),
  });

  return locationNumber;
};

const orderMap = (numberMap: NumberMap): NumberMap =>
  numberMap.sort((a, b) => a[1] - b[1]);
