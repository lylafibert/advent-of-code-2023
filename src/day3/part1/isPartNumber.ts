export const isPartNumber = ({
  rowIndex,
  columnIndex,
  numberLength,
  rowLength,
  engineSchematic,
}: {
  rowIndex: number;
  columnIndex: number;
  rowLength: number;
  numberLength: number;
  engineSchematic: string[];
}): boolean => {
  const isFirstColumn = columnIndex === 0;
  const isLastColumn = columnIndex + numberLength === rowLength;

  const rowAbove = engineSchematic[rowIndex - 1];
  const rowBelow = engineSchematic[rowIndex + 1];

  if (!isFirstColumn) {
    const leftCharacter = engineSchematic[rowIndex][columnIndex - 1];
    if (isSymbol(leftCharacter)) return true;

    if (rowBelow) {
      const lowerLeftCharacter = rowBelow[columnIndex - 1];
      if (isSymbol(lowerLeftCharacter)) return true;
    }

    if (rowAbove) {
      const upperLeftCharacter = rowAbove[columnIndex - 1];
      if (isSymbol(upperLeftCharacter)) return true;
    }
  }

  if (!isLastColumn) {
    const rightCharacter =
      engineSchematic[rowIndex][columnIndex + numberLength];

    if (isSymbol(rightCharacter)) return true;

    if (rowBelow) {
      const lowerRightCharacter = rowBelow[columnIndex + numberLength];

      if (isSymbol(lowerRightCharacter)) return true;
    }

    if (rowAbove) {
      const upperRightCharacter = rowAbove[columnIndex + numberLength];
      if (isSymbol(upperRightCharacter)) return true;
    }
  }

  if (rowAbove) {
    for (let i = columnIndex; i < columnIndex + numberLength; i++) {
      if (isSymbol(rowAbove[i])) return true;
    }
  }

  if (rowBelow) {
    for (let i = columnIndex; i < columnIndex + numberLength; i++) {
      if (isSymbol(rowBelow[i])) return true;
    }
  }
  return false;
};

const isSymbol = (character: string): boolean =>
  !parseInt(character) && character !== ".";
