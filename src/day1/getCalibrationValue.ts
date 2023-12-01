export const getCalibrationValue = (text: string): number => {
  const onlyDigits = text.replace(/\D/g, "");
  return parseInt(onlyDigits[0] + onlyDigits[onlyDigits.length - 1]);
};
