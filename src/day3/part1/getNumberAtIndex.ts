export const getNumberAtIndex = ({
  line,
  startIndex,
}: {
  line: string;
  startIndex: number;
}): string => {
  let number = line[startIndex];
  let isStillNumber = true;

  for (
    let index = startIndex + 1;
    isStillNumber && index < line.length;
    index++
  ) {
    const char = line[index];
    if (!!parseInt(char) || char === "0") {
      number += char;
    } else {
      isStillNumber = false;
    }
  }
  return number;
};
