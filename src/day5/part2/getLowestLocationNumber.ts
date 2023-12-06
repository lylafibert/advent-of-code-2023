import { getSeedLocation } from "../getSeedLocation";
import { Almanac } from "../types";

// WIP

export const getLowestLocationNumber = ({
  seeds,
  almanac,
}: {
  seeds: number[];
  almanac: Almanac;
}) => {
  // get all seeds ??

  const mapKeys = Object.keys(almanac);

  const orderedAlmanac = mapKeys.reduce((acc, key) => {
    acc[key] = almanac[key].sort((a, b) => a[1] - b[1]);
    return acc;
  }, {} as Almanac);

  return seeds.reduce((acc, seed) => {
    const location = getSeedLocation({
      seedNumber: seed,
      orderedAlmanac,
      mapKeys,
    });

    if (location < acc) {
      return location;
    }
    return acc;
  });
};
