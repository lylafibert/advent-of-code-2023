import { getDestinationNumber } from "./getDestinationNumber";

describe("getDestinationNumber", () => {
  it("returns the source number if it doesn't have a mapping ", () => {
    expect(
      getDestinationNumber({
        sourceNumber: 14,
        orderedMap: [
          [52, 50, 48],
          [50, 98, 2],
        ],
      })
    ).toEqual(14);

    expect(
      getDestinationNumber({
        sourceNumber: 13,
        orderedMap: [
          [52, 50, 48],
          [50, 98, 2],
        ],
      })
    ).toEqual(13);
  });
  it("uses the map to return the destination number from the source number", () => {
    expect(
      getDestinationNumber({
        sourceNumber: 79,
        orderedMap: [
          [52, 50, 48],
          [50, 98, 2],
        ],
      })
    ).toEqual(81);

    expect(
      getDestinationNumber({
        sourceNumber: 55,
        orderedMap: [
          [52, 50, 48],
          [50, 98, 2],
        ],
      })
    ).toEqual(57);
  });
});
