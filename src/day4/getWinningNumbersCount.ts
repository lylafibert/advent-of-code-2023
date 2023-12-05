export const getWinningNumbersCount = ({
  card,
  myNumbers,
}: {
  card: number[];
  myNumbers: number[];
}): number => {
  const winningNumbers = card.filter((number) => myNumbers.includes(number));

  return winningNumbers.length;
};
