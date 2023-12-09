import { getNextSequence } from "./getNextSequence";

describe("getNextSequence", () => {
  it("returns a new sequence made up of the difference between each step in the current sequence", () => {
    expect(getNextSequence([0, 3, 6, 9, 12, 15])).toEqual({
      nextSequence: [3, 3, 3, 3, 3],
      isAllZeroes: false,
    });
    expect(getNextSequence([3, 3, 3, 3, 3])).toEqual({
      nextSequence: [0, 0, 0, 0],
      isAllZeroes: true,
    });
    expect(getNextSequence([1, 3, 6, 10, 15, 21])).toEqual({
      nextSequence: [2, 3, 4, 5, 6],
      isAllZeroes: false,
    });
    expect(getNextSequence([2, 3, 4, 5, 6])).toEqual({
      nextSequence: [1, 1, 1, 1],
      isAllZeroes: false,
    });
    expect(getNextSequence([1, 1, 1, 1])).toEqual({
      nextSequence: [0, 0, 0],
      isAllZeroes: true,
    });
  });
});
