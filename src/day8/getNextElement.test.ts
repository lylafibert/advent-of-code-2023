import { getNextElement } from "./getNextElement";
import { EXAMPLE_NETWORK } from "./testData";
import { Instruction } from "./types";

describe("getNextElement", () => {
  it("returns the next element", () => {
    expect(
      getNextElement({
        network: EXAMPLE_NETWORK,
        currentElement: "AAA",
        instruction: Instruction.Right,
      })
    ).toEqual("CCC");

    expect(
      getNextElement({
        network: EXAMPLE_NETWORK,
        currentElement: "CCC",
        instruction: Instruction.Left,
      })
    ).toEqual("ZZZ");
  });
});
