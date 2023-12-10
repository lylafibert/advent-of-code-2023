import { getFarthestSteps } from "./getFarthestSteps";
import { DIAGRAM } from "./diagram";

const EXAMPLE_Diagram_A = ["-L|F7", "7S-7|", "L|7||", "-L-J|", "L|-JF"];
const EXAMPLE_Diagram_B = ["7-F7-", ".FJ|7", "SJLL7", "|F--J", "LJ.LJ"];

describe("getFarthestSteps", () => {
  it("returns the number of steps along the loop it takes to get from the starting position to the point farthest from the starting position", () => {
    expect(
      getFarthestSteps({ diagram: EXAMPLE_Diagram_A, startPosition: [1, 1] })
    ).toEqual(4);
    expect(
      getFarthestSteps({ diagram: EXAMPLE_Diagram_B, startPosition: [0, 2] })
    ).toEqual(8);
  });
  it("gets the puzzle answer", () => {
    expect(
      getFarthestSteps({ diagram: DIAGRAM, startPosition: [98, 94] })
    ).toEqual(6882);
  });
});
