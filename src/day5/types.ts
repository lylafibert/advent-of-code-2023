export type NumberMap = [number, number, number][];

export interface Almanac {
  "seed-soil": NumberMap;
  "soil-fertilizer": NumberMap;
  "fertilizer-water": NumberMap;
  "water-light": NumberMap;
  "light-temperature": NumberMap;
  "temperature-humidity": NumberMap;
  "humidity-location": NumberMap;
}
