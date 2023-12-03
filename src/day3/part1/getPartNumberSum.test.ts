import { ENGINE_SCHEMATIC } from "../engineSchematic";
import { getPartNumberSum } from "./getPartNumberSum";

const exampleEngineSchematicA = [
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

const exampleEngineSchematicB = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  "......+58.",
  "..592.....",
  "......755.",
  "...$...*..",
  ".664.598..",
];
describe("getPartNumberSum", () => {
  it("returns the sum of all part numbers", () => {
    expect(getPartNumberSum(exampleEngineSchematicA)).toEqual(4361);
    expect(getPartNumberSum(exampleEngineSchematicB)).toEqual(3827);
    expect(getPartNumberSum(ENGINE_SCHEMATIC)).toEqual(525181);
  });
});
