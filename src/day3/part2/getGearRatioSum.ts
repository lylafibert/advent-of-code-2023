import { getNumberAtIndex } from "./getNumberAtIndex";

export const getGearRatioSum = (engineSchematic: string[]): number => {
  let gearRatioSum = 0;

  engineSchematic.forEach((row, rowIndex) => {
    row.split("").forEach((char, charIndex) => {
      if (char === "*") {
        gearRatioSum += getGearRatio({
          rowIndex,
          columnIndex: charIndex,
          engineSchematic,
        });
      }
    });
  });
  return gearRatioSum;
};

const getGearRatio = ({
  rowIndex,
  columnIndex,
  engineSchematic,
}: {
  rowIndex: number;
  columnIndex: number;
  engineSchematic: string[];
}): number => {
  let adjacentNumberInfo: { row: string; index: number }[] = [];

  const isFirstColumn = columnIndex === 0;
  const isLastColumn = columnIndex === engineSchematic[0].length;

  const rowAbove = engineSchematic[rowIndex - 1];
  const rowBelow = engineSchematic[rowIndex + 1];
  const row = engineSchematic[rowIndex];

  if (!isFirstColumn) {
    const leftCharacter = engineSchematic[rowIndex][columnIndex - 1];
    if (isNumeric(leftCharacter))
      adjacentNumberInfo.push({ row, index: columnIndex - 1 });
  }

  if (!isLastColumn) {
    const rightCharacter = engineSchematic[rowIndex][columnIndex + 1];

    if (isNumeric(rightCharacter))
      adjacentNumberInfo.push({ row, index: columnIndex + 1 });
  }

  if (rowAbove) {
    const hasNumberDirectlyAbove = isNumeric(rowAbove[columnIndex]);
    if (hasNumberDirectlyAbove) {
      adjacentNumberInfo.push({ row: rowAbove, index: columnIndex });
    } else {
      const upperLeftCharacter = rowAbove[columnIndex - 1];
      if (isNumeric(upperLeftCharacter))
        adjacentNumberInfo.push({
          row: rowAbove,
          index: columnIndex - 1,
        });
      if (adjacentNumberInfo.length > 2) return 0;

      const upperRightCharacter = rowAbove[columnIndex + 1];

      if (isNumeric(upperRightCharacter))
        adjacentNumberInfo.push({
          row: rowAbove,
          index: columnIndex + 1,
        });
      if (adjacentNumberInfo.length > 2) return 0;
    }
  }

  if (rowBelow) {
    const hasNumberDirectlyBelow = isNumeric(rowBelow[columnIndex]);
    if (hasNumberDirectlyBelow) {
      adjacentNumberInfo.push({ row: rowBelow, index: columnIndex });
    } else {
      const lowerLeftCharacter = rowBelow[columnIndex - 1];
      if (isNumeric(lowerLeftCharacter))
        adjacentNumberInfo.push({
          row: rowBelow,
          index: columnIndex - 1,
        });
      if (adjacentNumberInfo.length > 2) return 0;

      const lowerRightCharacter = rowBelow[columnIndex + 1];

      if (isNumeric(lowerRightCharacter))
        adjacentNumberInfo.push({
          row: rowBelow,
          index: columnIndex + 1,
        });
    }
  }

  if (adjacentNumberInfo.length !== 2) return 0;

  return (
    getNumberAtIndex(adjacentNumberInfo[0]) *
    getNumberAtIndex(adjacentNumberInfo[1])
  );
};

const isNumeric = (char: string) => !!parseInt(char) || char === "0";
