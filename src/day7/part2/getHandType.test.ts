import { getHandType } from "./getHandType";
import { HandType } from "./types";

describe("getHandType", () => {
  it("identifies a five of a kind hand", () => {
    expect(getHandType("AAAAA")).toEqual(HandType.FiveOfAKind);
    expect(getHandType("JJJJJ")).toEqual(HandType.FiveOfAKind);
    expect(getHandType("JJJJA")).toEqual(HandType.FiveOfAKind);
    expect(getHandType("JJJAA")).toEqual(HandType.FiveOfAKind);
    expect(getHandType("JJAAA")).toEqual(HandType.FiveOfAKind);
    expect(getHandType("JAAAA")).toEqual(HandType.FiveOfAKind);
  });
  it("identifies a four of a kind hand", () => {
    expect(getHandType("AA2AA")).toEqual(HandType.FourOfAKind);
    expect(getHandType("T55J5")).toEqual(HandType.FourOfAKind);
    expect(getHandType("KTJJT")).toEqual(HandType.FourOfAKind);
    expect(getHandType("QJJJA")).toEqual(HandType.FourOfAKind);
    expect(getHandType("QQQJA")).toEqual(HandType.FourOfAKind);
    expect(getHandType("QJJQ2")).toEqual(HandType.FourOfAKind);
  });
  it("identifies a full house hand", () => {
    expect(getHandType("23332")).toEqual(HandType.FullHouse);
    expect(getHandType("233J2")).toEqual(HandType.FullHouse);
  });
  it("identifies a three of a kind hand", () => {
    expect(getHandType("TTT98")).toEqual(HandType.ThreeOfAKind);
    expect(getHandType("TTJ98")).toEqual(HandType.ThreeOfAKind);
    expect(getHandType("TJJ98")).toEqual(HandType.ThreeOfAKind);
  });
  it("identifies a two pair hand", () => {
    expect(getHandType("23432")).toEqual(HandType.TwoPair);
    expect(getHandType("KK677")).toEqual(HandType.TwoPair);
  });
  it("identifies a one pair hand", () => {
    expect(getHandType("A23A4")).toEqual(HandType.OnePair);
    expect(getHandType("A23J4")).toEqual(HandType.OnePair);
    expect(getHandType("32T3K")).toEqual(HandType.OnePair);
    expect(getHandType("T8J69")).toEqual(HandType.OnePair);
  });
  it("identifies a high card hand", () => {
    expect(getHandType("23456")).toEqual(HandType.HighCard);
  });
});
