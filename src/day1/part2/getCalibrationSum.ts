import { getCalibrationValue } from "../getCalibrationValue";
import { transformLine } from "./transformLine";

export const getCalibrationSum = (calibrationlines: string[]): number =>
  calibrationlines.reduce((sum, line) => {
    const transformedLine = transformLine(line);

    return sum + getCalibrationValue(transformedLine);
  }, 0);
