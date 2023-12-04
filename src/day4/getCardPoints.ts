export const getCardPoints = ({
  card,
  myNumbers,
}: {
  card: number[];
  myNumbers: number[];
}): number => {
  const winningNumbers = card.filter((number) => myNumbers.includes(number));

  if (winningNumbers.length) {
    let points = 1;

    for (let i = 1; i < winningNumbers.length; i++) {
      points *= 2;
    }
    return points;
  }
  return 0;
};
