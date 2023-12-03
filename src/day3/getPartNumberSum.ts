/*

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

*/

import { getNumberAtIndex } from "./getNumberAtIndex";
import { isPartNumber } from "./isPartNumber";

export const getPartNumberSum = (engineSchematic: string[]): number => {
  return engineSchematic.reduce((sum, row, rowIndex) => {
    let i = 0;

    let newSum = sum;
    const rowLength = row.length;
    while (i < rowLength) {
      const currentCharacter = row[i];

      if (parseInt(currentCharacter)) {
        const currentNumber = getNumberAtIndex({ line: row, startIndex: i });
        const numberLength = currentNumber.length;

        const isPartNum = isPartNumber({
          rowIndex,
          columnIndex: i,
          engineSchematic,
          numberLength,
          rowLength,
        });

        if (isPartNum) newSum += parseInt(currentNumber);
        i += currentNumber.length + 1;
      } else {
        i++;
      }
    }
    return newSum;
  }, 0);
};
