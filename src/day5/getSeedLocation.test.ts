import { getSeedLocation } from "./getSeedLocation";
import { Almanac } from "./types";

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
    [49, 53, 8],
    [0, 11, 42],
    [42, 0, 7],
    [57, 7, 4],
  ],

  "water-light": [
    [88, 18, 7],
    [18, 25, 70],
  ],

  "light-temperature": [
    [45, 77, 23],
    [81, 45, 19],
    [68, 64, 13],
  ],

  "temperature-humidity": [
    [0, 69, 1],
    [1, 0, 69],
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
        almanac: exampleAlmanac,
      })
    ).toEqual(82);

    // expect(
    //   getSeedLocation({
    //     seedNumber: 14,
    //     almanac: exampleAlmanac,
    //   })
    // ).toEqual(43);

    // expect(
    //   getSeedLocation({
    //     seedNumber: 55,
    //     almanac: exampleAlmanac,
    //   })
    // ).toEqual(86);

    // expect(
    //   getSeedLocation({
    //     seedNumber: 13,
    //     almanac: exampleAlmanac,
    //   })
    // ).toEqual(35);
  });
});
