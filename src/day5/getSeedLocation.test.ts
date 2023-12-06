import { getSeedLocation } from "./getSeedLocation";
import { Almanac } from "./types";

const mapKeys = [
  "seed-soil",
  "soil-fertilizer",
  "fertilizer-water",
  "water-light",
  "light-temperature",
  "temperature-humidity",
  "humidity-location",
];

const exampleAlmanac: Almanac = {
  "seed-soil": [
    [52, 50, 48],
    [50, 98, 2],
  ],

  "soil-fertilizer": [
    [39, 0, 15],
    [0, 15, 37],
    [37, 52, 2],
  ],

  "fertilizer-water": [
    [42, 0, 7],
    [57, 7, 4],
    [0, 11, 42],
    [49, 53, 8],
  ],

  "water-light": [
    [88, 18, 7],
    [18, 25, 70],
  ],

  "light-temperature": [
    [81, 45, 19],
    [68, 64, 13],
    [45, 77, 23],
  ],

  "temperature-humidity": [
    [1, 0, 69],
    [0, 69, 1],
  ],

  "humidity-location": [
    [60, 56, 37],
    [56, 93, 4],
  ],
};

describe("getSeedLocation", () => {
  it("returns the location number from the seedNumber", () => {
    expect(
      getSeedLocation({
        seedNumber: 79,
        mapKeys,
        orderedAlmanac: exampleAlmanac,
      })
    ).toEqual(82);

    expect(
      getSeedLocation({
        seedNumber: 14,
        mapKeys,
        orderedAlmanac: exampleAlmanac,
      })
    ).toEqual(43);

    expect(
      getSeedLocation({
        seedNumber: 55,
        mapKeys,
        orderedAlmanac: exampleAlmanac,
      })
    ).toEqual(86);

    expect(
      getSeedLocation({
        seedNumber: 13,
        mapKeys,
        orderedAlmanac: exampleAlmanac,
      })
    ).toEqual(35);
  });
});
