import { countWaysToWin } from "./countWaysToWin";

export const getWaysToWinProduct = (
  races: {
    raceDuration: number;
    recordDistance: number;
  }[]
): number => {
  const waysToWinRaces = races.map((race) => countWaysToWin(race));

  return waysToWinRaces.reduce((product, raceCount, index) => {
    if (index === 0) return raceCount;
    return product * raceCount;
  }, 0);
};
