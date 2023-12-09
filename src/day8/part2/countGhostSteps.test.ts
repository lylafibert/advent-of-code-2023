import { countGhostSteps } from "./countGhostSteps";
import { INSTRUCTIONS, NETWORK } from "../maps";
import { Network } from "../types";

describe("countGhostSteps", () => {
  it("returns the number of steps it taken until all nodes end with Z", () => {
    const EXAMPLE_NETWORK: Network = {
      "11A": ["11B", "XXX"],
      "11B": ["XXX", "11Z"],
      "11Z": ["11B", "XXX"],
      "22A": ["22B", "XXX"],
      "22B": ["22C", "22C"],
      "22C": ["22Z", "22Z"],
      "22Z": ["22B", "22B"],
      XXX: ["XXX", "XXX"],
    };
    expect(
      countGhostSteps({
        network: EXAMPLE_NETWORK,
        instructions: "LR",
      })
    ).toEqual(6);
  });

  it("gets the puzzle answer", () => {
    expect(
      countGhostSteps({
        network: NETWORK,
        instructions: INSTRUCTIONS,
      })
    ).toEqual(16897);
  });
});
