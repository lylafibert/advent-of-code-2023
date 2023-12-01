import { getCalibrationValue } from "../getCalibrationValue";

export const getCalibrationSum = (calibrationlines: string[]): number =>
  calibrationlines.reduce((sum, line) => sum + getCalibrationValue(line), 0);
