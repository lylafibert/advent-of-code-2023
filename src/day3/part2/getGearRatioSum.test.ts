import { ENGINE_SCHEMATIC } from "../engineSchematic";
import { getGearRatioSum } from "./getGearRatioSum";

const exampleEngineSchematic = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

describe("getGearRatioSum", () => {
  it("returns the sum of all part numbers", () => {
    expect(getGearRatioSum(exampleEngineSchematic)).toEqual(467835);
    expect(getGearRatioSum(ENGINE_SCHEMATIC)).toEqual(84289137);
  });
});
