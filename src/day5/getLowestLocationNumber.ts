import { getSeedLocation } from "./getSeedLocation";
import { Almanac } from "./types";

export const getLowestLocationNumber = ({
  seeds,
  almanac,
}: {
  seeds: number[];
  almanac: Almanac;
}) => {
  const mapKeys = Object.keys(almanac);

  const orderedAlmanac = mapKeys.reduce((acc, key) => {
    acc[key] = almanac[key].sort((a, b) => a[1] - b[1]);
    return acc;
  }, {} as Almanac);

  return seeds.reduce((acc, seed) => {
    const location = getSeedLocation({
      seedNumber: seed,
      orderedAlmanac,
    });

    if (location < acc) {
      return location;
    }
    return acc;
  });
};
