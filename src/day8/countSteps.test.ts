import { countSteps } from "./countSteps";
import { INSTRUCTIONS, NETWORK } from "./maps";
import { EXAMPLE_NETWORK } from "./testData";
import { Network } from "./types";

describe("countSteps", () => {
  it("returns the number of steps it takes to get from AAA to ZZZ when the instructions don't need repeating", () => {
    expect(
      countSteps({
        network: EXAMPLE_NETWORK,
        instructions: "RL",
      })
    ).toEqual(2);
  });

  it("returns the number of steps it takes to get from AAA to ZZZ when the instructions need repeating", () => {
    const EXAMPLE_NETWORK_A: Network = {
      AAA: ["BBB", "BBB"],
      BBB: ["AAA", "ZZZ"],
      ZZZ: ["ZZZ", "ZZZ"],
    };
    expect(
      countSteps({
        network: EXAMPLE_NETWORK_A,
        instructions: "LLR",
      })
    ).toEqual(6);
  });

  it("gets the puzzle answer", () => {
    expect(
      countSteps({
        network: NETWORK,
        instructions: INSTRUCTIONS,
      })
    ).toEqual(16897);
  });
});
