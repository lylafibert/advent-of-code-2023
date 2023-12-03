export const getNumberAtIndex = ({
  row,
  index,
}: {
  row: string;
  index: number;
}): number => {
  let number = row[index];
  let isStillNumber = true;

  for (let i = index + 1; isStillNumber && i < row.length; i++) {
    const char = row[i];
    if (!!parseInt(char) || char === "0") {
      number += char;
    } else {
      isStillNumber = false;
    }
  }
  isStillNumber = true;
  for (let i = index - 1; isStillNumber && i >= 0; i--) {
    const char = row[i];
    if (!!parseInt(char) || char === "0") {
      number = char + number;
    } else {
      isStillNumber = false;
    }
  }

  return parseInt(number);
};
