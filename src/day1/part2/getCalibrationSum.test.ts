import { calibrationDocument } from "../calibrationDocument";
import { getCalibrationSum } from "./getCalibrationSum";

describe("getCalibrationSum", () => {
  it("returns the sum of all the calibration values", () => {
    expect(
      getCalibrationSum([
        "two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen",
      ])
    ).toEqual(281);
    expect(getCalibrationSum(calibrationDocument)).toEqual(53268);
  });
});
