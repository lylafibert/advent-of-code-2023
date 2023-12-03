import { isPartNumber } from "./isPartNumber";

// bottom right X
// bottom
// top
// right
const engineSchematic = [
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

describe("isPartNumber", () => {
  it("returns true if the given number is adjacent to a symbol", () => {
    expect(
      isPartNumber({
        rowIndex: 0,
        rowLength: 10,
        columnIndex: 0,
        numberLength: 3,
        engineSchematic,
      })
    ).toEqual(true);

    expect(
      isPartNumber({
        rowIndex: 4,
        columnIndex: 0,
        rowLength: 10,
        numberLength: 3,
        engineSchematic,
      })
    ).toEqual(true);

    expect(
      isPartNumber({
        rowIndex: 2,
        columnIndex: 2,
        rowLength: 10,
        numberLength: 2,
        engineSchematic,
      })
    ).toEqual(true);
  });

  it("returns false if the given number is not adjacent to a symbol", () => {
    expect(
      isPartNumber({
        rowIndex: 0,
        rowLength: 10,
        columnIndex: 5,
        numberLength: 3,
        engineSchematic,
      })
    ).toEqual(false);

    expect(
      isPartNumber({
        rowIndex: 5,
        rowLength: 10,
        columnIndex: 7,
        numberLength: 2,
        engineSchematic,
      })
    ).toEqual(false);
  });
});
