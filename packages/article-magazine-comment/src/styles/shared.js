import styleguide, {
  tabletRowPadding,
  tabletWidth
} from "@times-components/styleguide";

const { colours, fontFactory, spacing } = styleguide();
const sharedStyles = {
  articleHeadline: {
    ...fontFactory({
      font: "headline",
      fontSize: "headline"
    }),
    color: colours.functional.brandColour,
    marginBottom: spacing(2),
    textAlign: "center"
  },
  authorImage: {
    marginBottom: spacing(5)
  },
  container: {
    alignItems: "center",
    marginBottom: spacing(5),
    marginLeft: spacing(2),
    marginRight: spacing(2),
    paddingTop: spacing(7)
  },
  containerTablet: {
    alignSelf: "center",
    width: tabletWidth
  },
  datePublication: {
    ...fontFactory({
      font: "supporting",
      fontSize: "cardMeta"
    }),
    color: colours.functional.secondary,
    marginTop: spacing(3)
  },
  flags: {
    marginBottom: spacing(3),
    marginTop: spacing(1)
  },
  label: {
    marginBottom: spacing(2)
  },
  leadAssetContainer: {
    marginBottom: spacing(4)
  },
  leadAssetContainerTablet: {
    alignSelf: "center",
    width: tabletWidth - tabletRowPadding
  },
  meta: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  metaContainer: {
    alignItems: "center"
  },
  standFirst: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "smallestHeadline"
    }),
    color: colours.functional.primary,
    marginBottom: spacing(3),
    paddingHorizontal: spacing(2),
    textAlign: "center"
  }
};

export default sharedStyles;
