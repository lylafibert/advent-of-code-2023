import { getDistanceTravelled } from "./getDistanceTravelled";

export const countWaysToWin = ({
  raceDuration,
  recordDistance,
}: {
  raceDuration: number;
  recordDistance: number;
}): number => {
  let waysToWin = 0;

  let holdTooLong = false;

  for (let holdTime = 1; !holdTooLong && holdTime < raceDuration; holdTime++) {
    const distanceTravelled = getDistanceTravelled({ raceDuration, holdTime });
    if (distanceTravelled > recordDistance) {
      waysToWin++;
    } else if (!!waysToWin) {
      holdTooLong = true;
    }
  }
  return waysToWin;
};
