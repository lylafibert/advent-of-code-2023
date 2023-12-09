export enum HandType {
  FiveOfAKind,
  FourOfAKind,
  FullHouse,
  ThreeOfAKind,
  TwoPair,
  OnePair,
  HighCard,
}

export type HandData = { hand: Hand; bid: number };

export enum Card {
  Ace = "A",
  King = "K",
  Queen = "Q",
  Ten = "T",
  Nine = "9",
  Eight = "8",
  Seven = "7",
  Six = "6",
  Five = "5",
  Four = "4",
  Three = "3",
  Two = "2",
  Joker = "J",
}

export type Hand = string;
