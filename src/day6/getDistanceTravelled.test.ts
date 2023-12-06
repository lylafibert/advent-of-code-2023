import { getDistanceTravelled } from "./getDistanceTravelled";

describe("getDistanceTravelled", () => {
  it("returns the distance travelled by the boat in a race", () => {
    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 0,
      })
    ).toEqual(0);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 1,
      })
    ).toEqual(6);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 2,
      })
    ).toEqual(10);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 3,
      })
    ).toEqual(12);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 4,
      })
    ).toEqual(12);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 5,
      })
    ).toEqual(10);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 6,
      })
    ).toEqual(6);

    expect(
      getDistanceTravelled({
        raceDuration: 7,
        holdTime: 7,
      })
    ).toEqual(0);
  });
});
