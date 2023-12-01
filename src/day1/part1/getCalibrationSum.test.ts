import { calibrationDocument } from "../calibrationDocument";
import { getCalibrationSum } from "./getCalibrationSum";

describe("getCalibrationSum", () => {
  it("returns the sum of all the calibration values", () => {
    expect(
      getCalibrationSum(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
    ).toEqual(142);
    expect(getCalibrationSum(calibrationDocument)).toEqual(53080);
  });
});
