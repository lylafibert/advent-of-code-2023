import { almanac, seeds } from "./almanac";
import { getLowestLocationNumber } from "./getLowestLocationNumber";
import { Almanac } from "./types";

const exampleSeeds = [79, 14, 55, 13];

const exampleAlmanac: Almanac = {
  "seed-soil": [
    [50, 98, 2],
    [52, 50, 48],
  ],

  "soil-fertilizer": [
    [0, 15, 37],
    [37, 52, 2],
    [39, 0, 15],
  ],

  "fertilizer-water": [
    [0, 11, 42],
    [42, 0, 7],
    [49, 53, 8],
    [57, 7, 4],
  ],

  "water-light": [
    [18, 25, 70],
    [88, 18, 7],
  ],

  "light-temperature": [
    [68, 64, 13],
    [81, 45, 19],
    [45, 77, 23],
  ],

  "temperature-humidity": [
    [0, 69, 1],
    [1, 0, 69],
  ],

  "humidity-location": [
    [56, 93, 4],
    [60, 56, 37],
  ],
};

describe("getLowestLocationNumber", () => {
  it("returns the lowest location number produced from the initial seeds", () => {
    expect(
      getLowestLocationNumber({
        seeds: exampleSeeds,
        almanac: exampleAlmanac,
      })
    ).toEqual(35);

    expect(
      getLowestLocationNumber({
        seeds,
        almanac,
      })
    ).toEqual(178159714);
  });
});
