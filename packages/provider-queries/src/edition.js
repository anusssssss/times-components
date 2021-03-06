import { addTypenameToDocument } from "apollo-utilities";
import gql from "graphql-tag";

export default addTypenameToDocument(
  gql`
    query EditionQuery($id: ID!) {
      edition(id: $id) {
        id
        publishedTime
        updateText
        sections {
          id
          title
          colour {
            rgba {
              red
              green
              blue
              alpha
            }
          }
          ...standardSection
          ...magazineSection
          ...puzzleSection
        }
      }
    }

    fragment magazineSection on MagazineSection {
      name: __typename
      slices {
        ... on StandardSlice {
          name: __typename
          items {
            ...tile
          }
        }
        ... on CommentLeadAndCartoonSlice {
          name: __typename
          lead {
            ...tile
          }
          cartoon {
            ...tile
          }
        }
        ... on LetterThundererPodcastSlice {
          name: __typename
          letter {
            ...tile
          }
          thunderer {
            ...tile
          }
          podcast {
            ...tile
          }
        }
        ... on CommentTwoAndNotebookSlice {
          name: __typename
          main1 {
            ...tile
          }
          main2 {
            ...tile
          }
          notebook {
            ...tile
          }
        }
        ... on FocusSlice {
          name: __typename
          main {
            ...tile
          }
        }
        ... on LeadersSlice {
          name: __typename
          leader1 {
            ...tile
          }
          leader2 {
            ...tile
          }
          leader3 {
            ...tile
          }
        }
        ... on LeadOneAndFourSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
        }
        ... on LeadOneAndOneSlice {
          name: __typename
          lead {
            ...tile
          }
          support {
            ...tile
          }
        }
        ... on LeadOneAndTwoSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support1 {
            ...tile
          }
        }
        ... on LeadOneFullWidthSlice {
          name: __typename
          lead {
            ...tile
          }
        }
        ... on LeadOneNoPicAndOneAndPortraitSlice {
          name: __typename
          lead {
            ...tile
          }
          support {
            ...tile
          }
          portrait {
            ...tile
          }
        }
        ... on LeadTwoNoPicAndTwoSlice {
          name: __typename
          lead1 {
            ...tile
          }
          lead2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on ObituariesLeadAndTwoSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on OpinionOneAndTwoSlice {
          name: __typename
          opinion {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on SecondaryFourSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          secondary3 {
            ...tile
          }
          secondary4 {
            ...tile
          }
        }
        ... on SecondaryOneSlice {
          name: __typename
          secondary {
            ...tile
          }
        }
        ... on SecondaryOneAndColumnistSlice {
          name: __typename
          secondary {
            ...tile
          }
          columnist {
            ...tile
          }
        }
        ... on SecondaryOneAndFourSlice {
          name: __typename
          secondary {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            article {
              id
            }
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
        }
        ... on SecondaryTwoAndTwoSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on SecondaryTwoNoPicAndTwoSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on TwoPicAndSixNoPicSlice {
          name: __typename
          lead1 {
            ...tile
          }
          lead2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
          support5 {
            ...tile
          }
          support6 {
            ...tile
          }
        }
      }
    }

    fragment puzzleSection on PuzzleSection {
      name: __typename
      slices {
        ... on Puzzle {
          name: __typename
          id
          title
          url
          image {
            crop(ratio: "16:9") {
              ratio
              url
            }
          }
        }
      }
    }

    fragment standardSection on StandardSection {
      name: __typename
      slices {
        ... on StandardSlice {
          name: __typename
          items {
            ...tile
          }
        }
        ... on CommentLeadAndCartoonSlice {
          name: __typename
          lead {
            ...tile
          }
          cartoon {
            ...tile
          }
        }
        ... on LetterThundererPodcastSlice {
          name: __typename
          letter {
            ...tile
          }
          thunderer {
            ...tile
          }
          podcast {
            ...tile
          }
        }
        ... on CommentTwoAndNotebookSlice {
          name: __typename
          main1 {
            ...tile
          }
          main2 {
            ...tile
          }
          notebook {
            ...tile
          }
        }
        ... on FocusSlice {
          name: __typename
          main {
            ...tile
          }
        }
        ... on LeadersSlice {
          name: __typename
          leader1 {
            ...tile
          }
          leader2 {
            ...tile
          }
          leader3 {
            ...tile
          }
        }
        ... on LeadOneAndFourSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
        }
        ... on LeadOneAndOneSlice {
          name: __typename
          lead {
            ...tile
          }
          support {
            ...tile
          }
        }
        ... on LeadOneAndTwoSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support1 {
            ...tile
          }
        }
        ... on LeadOneFullWidthSlice {
          name: __typename
          lead {
            ...tile
          }
        }
        ... on LeadOneNoPicAndOneAndPortraitSlice {
          name: __typename
          lead {
            ...tile
          }
          support {
            ...tile
          }
          portrait {
            ...tile
          }
        }
        ... on LeadTwoNoPicAndTwoSlice {
          name: __typename
          lead1 {
            ...tile
          }
          lead2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on ObituariesLeadAndTwoSlice {
          name: __typename
          lead {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on OpinionOneAndTwoSlice {
          name: __typename
          opinion {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on SecondaryFourSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          secondary3 {
            ...tile
          }
          secondary4 {
            ...tile
          }
        }
        ... on SecondaryOneSlice {
          name: __typename
          secondary {
            ...tile
          }
        }
        ... on SecondaryOneAndColumnistSlice {
          name: __typename
          secondary {
            ...tile
          }
          columnist {
            ...tile
          }
        }
        ... on SecondaryOneAndFourSlice {
          name: __typename
          secondary {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            article {
              id
            }
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
        }
        ... on SecondaryTwoAndTwoSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on SecondaryTwoNoPicAndTwoSlice {
          name: __typename
          secondary1 {
            ...tile
          }
          secondary2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
        }
        ... on TwoPicAndSixNoPicSlice {
          name: __typename
          lead1 {
            ...tile
          }
          lead2 {
            ...tile
          }
          support1 {
            ...tile
          }
          support2 {
            ...tile
          }
          support3 {
            ...tile
          }
          support4 {
            ...tile
          }
          support5 {
            ...tile
          }
          support6 {
            ...tile
          }
        }
        ... on DailyUniversalRegister {
          name: __typename
          briefing {
            ...durItem
          }
          briefing {
            ...durItem
          }
          onThisDay {
            ...durItem
          }
          natureNotes {
            ...durItem
          }
          birthdaysToday {
            ...durItem
          }
        }
      }
    }

    fragment durItem on DailyUniversalRegisterItem {
      title
      byline
      content
    }

    fragment tile on Tile {
      ...teasers
      headline
      leadAsset {
        ... on Video {
          brightcoveAccountId
          brightcovePolicyKey
          brightcoveVideoId
          posterImage {
            ...imageProps
          }
          skySports
        }
        ... on Image {
          ...imageProps
        }
      }
      strapline
      article {
        ...article
      }
    }

    fragment article on Article {
      backgroundColour {
        rgba {
          red
          green
          blue
          alpha
        }
      }
      flags
      leadAsset {
        ... on Video {
          brightcoveAccountId
          brightcovePolicyKey
          brightcoveVideoId
          posterImage {
            ...imageProps
          }
          skySports
        }
        ... on Image {
          ...imageProps
        }
      }
      standfirst
      template
      ...articleProps
    }

    fragment imageProps on Image {
      caption
      credits
      crop169: crop(ratio: "16:9") {
        ratio
        url
      }
      crop32: crop(ratio: "3:2") {
        ratio
        url
      }
      crop1251: crop(ratio: "1.25:1") {
        ratio
        url
      }
      crop11: crop(ratio: "1:1") {
        ratio
        url
      }
      crop45: crop(ratio: "4:5") {
        ratio
        url
      }
      crop23: crop(ratio: "2:3") {
        ratio
        url
      }
      crop2251: crop(ratio: "2.25:1") {
        ratio
        url
      }
      id
      title
    }

    fragment articleProps on Article {
      ...summaries
      byline
      hasVideo
      headline
      id
      label
      publicationName
      publishedTime
      section
      shortHeadline
      shortIdentifier
      slug
      url
    }

    fragment summaries on Article {
      summary125: summary(maxCharCount: 125)
    }

    fragment teasers on Tile {
      teaser125: teaser(maxCharCount: 125)
    }
  `
);
