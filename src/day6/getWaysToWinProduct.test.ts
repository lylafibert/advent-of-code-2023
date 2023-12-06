import { getWaysToWinProduct } from "./getWaysToWinProduct";

const exampleRaces = [
  { raceDuration: 7, recordDistance: 9 },
  { raceDuration: 15, recordDistance: 40 },
  { raceDuration: 30, recordDistance: 200 },
];

// Time:        35     93     73     66
// Distance:   212   2060   1201   1044

const races = [
  { raceDuration: 35, recordDistance: 212 },
  { raceDuration: 93, recordDistance: 2060 },
  { raceDuration: 73, recordDistance: 1201 },
  { raceDuration: 66, recordDistance: 1044 },
];

describe("getWaysToWinProduct", () => {
  it("returns the number of ways to win each race multiplied together", () => {
    expect(getWaysToWinProduct(exampleRaces)).toEqual(288);
    expect(getWaysToWinProduct(races)).toEqual(288);
  });
});
