import { getHandType } from "./getHandType";
import { HandType } from "./types";

describe("getHandType", () => {
  it("identifies a five of a kind hand", () => {
    expect(getHandType("AAAAA")).toEqual(HandType.FiveOfAKind);
  });
  it("identifies a four of a kind hand", () => {
    expect(getHandType("AA2AA")).toEqual(HandType.FourOfAKind);
  });
  it("identifies a full house hand", () => {
    expect(getHandType("23332")).toEqual(HandType.FullHouse);
  });
  it("identifies a three of a kind hand", () => {
    expect(getHandType("TTT98")).toEqual(HandType.ThreeOfAKind);
  });
  it("identifies a two pair hand", () => {
    expect(getHandType("23432")).toEqual(HandType.TwoPair);
  });
  it("identifies a one pair hand", () => {
    expect(getHandType("A23A4")).toEqual(HandType.OnePair);
  });
  it("identifies a high card hand", () => {
    expect(getHandType("23456")).toEqual(HandType.HighCard);
  });
});
