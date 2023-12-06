export const getDistanceTravelled = ({
  raceDuration,
  holdTime,
}: {
  raceDuration: number;
  holdTime: number;
}): number => {
  const speed = holdTime;

  const travelTime = raceDuration - holdTime;

  if (!travelTime) return 0;

  return speed * travelTime;
};
