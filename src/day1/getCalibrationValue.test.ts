import { getCalibrationValue } from "./getCalibrationValue";

describe("getCalibrationValue", () => {
  it("combines the first and last digits in a string, combines them and returns that number", () => {
    expect(getCalibrationValue("1abc2")).toEqual(12);
    expect(getCalibrationValue("pqr3stu8vwx")).toEqual(38);
    expect(getCalibrationValue("a1b2c3d4e5f")).toEqual(15);
    expect(getCalibrationValue("treb7uchet")).toEqual(77);
  });
});
