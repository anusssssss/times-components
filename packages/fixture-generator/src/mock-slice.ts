import {
  ArticleSlice,
  LeadOneAndFourSlice,
  LeadOneFullWidthSlice,
  LeadOneAndOneSlice,
  LeadOneAndTwoSlice,
  LeadTwoNoPicAndTwoSlice,
  SecondaryOneSlice,
  SecondaryFourSlice,
  SecondaryTwoNoPicAndTwoSlice,
  TwoPicAndSixNoPicSlice,
  Tile
} from "./types";
import MockArticle from "./mock-article";

interface LeadOneAndFourSliceWithName extends LeadOneAndFourSlice {
  name: string;
}

interface LeadOneFullWidthSliceWithName extends LeadOneFullWidthSlice {
  name: string;
}

interface LeadOneAndOneSliceWithName extends LeadOneAndOneSlice {
  name: string;
}

interface LeadOneAndTwoSliceWithName extends LeadOneAndTwoSlice {
  name: string;
}

interface LeadTwoNoPicAndTwoSliceWithName extends LeadTwoNoPicAndTwoSlice {
  name: string;
}

interface SecondaryOneSliceWithName extends SecondaryOneSlice {
  name: string;
}

interface SecondaryFourSliceWithName extends SecondaryFourSlice {
  name: string;
}

interface SecondaryTwoNoPicAndTwoSliceWithName
  extends SecondaryTwoNoPicAndTwoSlice {
  name: string;
}

interface TwoPicAndSixNoPicSliceWithName extends TwoPicAndSixNoPicSlice {
  name: string;
}

function getTile(): Tile {
  const article = new MockArticle().get();
  return {
    article,
    headline: article.headline,
    leadAsset: article.leadAsset,
    strapline: article.standfirst
  };
}

function getTiles(count: number): Array<Tile> {
  return new Array(count).fill(0).map(() => getTile());
}

function mockLeadOneAndFourSlice(): LeadOneAndFourSliceWithName {
  const tiles = getTiles(5);
  return <LeadOneAndFourSliceWithName>{
    name: "LeadOneAndFourSliceWithName",
    lead: tiles[0],
    items: tiles,
    support1: tiles[1],
    support2: tiles[2],
    support3: tiles[3],
    support4: tiles[4]
  };
}

function mockLeadOneFullWidthSlice(): LeadOneFullWidthSliceWithName {
  const tiles = getTiles(1);
  return <LeadOneFullWidthSliceWithName>{
    name: "LeadOneFullWidthSlice",
    lead: tiles[0],
    items: tiles
  };
}

function mockLeadOneAndOneSlice(): LeadOneAndOneSliceWithName {
  const tiles = getTiles(2);
  return <LeadOneAndOneSliceWithName>{
    name: "LeadOneAndOneSlice",
    lead: tiles[0],
    support: tiles[1],
    items: tiles
  };
}

function mockLeadOneAndTwoSlice(): LeadOneAndTwoSliceWithName {
  const tiles = getTiles(3);
  return <LeadOneAndTwoSliceWithName>{
    name: "LeadOneAndTwoSlice",
    lead: tiles[0],
    support1: tiles[1],
    support2: tiles[2],
    items: tiles
  };
}

function mockLeadTwoNoPicAndTwoSlice(): LeadTwoNoPicAndTwoSliceWithName {
  const tiles = getTiles(4);
  return <LeadTwoNoPicAndTwoSliceWithName>{
    name: "LeadTwoNoPicAndTwoSlice",
    lead1: tiles[0],
    lead2: tiles[1],
    support1: tiles[2],
    support2: tiles[3],
    items: tiles
  };
}

function mockSecondaryOneSlice(): SecondaryOneSliceWithName {
  const tiles = getTiles(1);
  return <SecondaryOneSliceWithName>{
    name: "SecondaryOneSlice",
    secondary: tiles[0],
    items: tiles
  };
}

function mockSecondaryFourSlice(): SecondaryFourSliceWithName {
  const tiles = getTiles(4);
  return <SecondaryFourSliceWithName>{
    name: "SecondaryFourSlice",
    secondary1: tiles[0],
    secondary2: tiles[1],
    secondary3: tiles[2],
    secondary4: tiles[3],
    items: tiles
  };
}

function mockSecondaryTwoNoPicAndTwoSlice(): SecondaryTwoNoPicAndTwoSliceWithName {
  const tiles = getTiles(4);
  return <SecondaryTwoNoPicAndTwoSliceWithName>{
    name: "SecondaryTwoNoPicAndTwoSlice",
    secondary1: tiles[0],
    secondary2: tiles[1],
    support1: tiles[2],
    support2: tiles[3],
    items: tiles
  };
}

function mockList2AndSixNoPicSlice(): TwoPicAndSixNoPicSliceWithName {
  const tiles = getTiles(8);
  return <TwoPicAndSixNoPicSliceWithName>{
    name: "TwoPicAndSixNoPicSlice",
    lead1: tiles[0],
    lead2: tiles[1],
    support1: tiles[2],
    support2: tiles[3],
    support3: tiles[4],
    support4: tiles[5],
    support5: tiles[6],
    support6: tiles[7],
    items: tiles
  };
}

function mockArticleSlice(count: number): ArticleSlice {
  return { items: getTiles(count) };
}

export default mockArticleSlice;
export {
  mockLeadOneAndFourSlice,
  mockLeadOneFullWidthSlice,
  mockLeadOneAndOneSlice,
  mockLeadOneAndTwoSlice,
  mockLeadTwoNoPicAndTwoSlice,
  mockSecondaryOneSlice,
  mockSecondaryFourSlice,
  mockSecondaryTwoNoPicAndTwoSlice,
  mockList2AndSixNoPicSlice
};
