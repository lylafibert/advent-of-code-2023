import { getNextValue } from "./getNextValue";

describe("getNextValue", () => {
  it("extrapolates the next value in the sequence", () => {
    expect(getNextValue({ sequence: [0, 3, 6, 9, 12, 15], diff: 3 })).toEqual(
      18
    );
    expect(getNextValue({ sequence: [3, 3, 3, 3, 3], diff: 0 })).toEqual(3);
    expect(getNextValue({ sequence: [2, 3, 4, 5, 6], diff: 1 })).toEqual(7);
    expect(getNextValue({ sequence: [1, 1, 1, 1, 1], diff: 0 })).toEqual(1);
    expect(getNextValue({ sequence: [1, 3, 6, 10, 15, 21], diff: 7 })).toEqual(
      28
    );
  });
});
