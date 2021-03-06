import { colours, fonts, spacing } from "@times-components/styleguide";

const styles = {
  headline: {
    fontFamily: fonts.headline,
    fontSize: 35,
    lineHeight: 35,
    textAlign: "center"
  },
  imageContainer: {
    width: "100%"
  },
  summaryContainer: {
    alignItems: "center",
    backgroundColor: colours.functional.border,
    paddingBottom: spacing(5),
    paddingHorizontal: spacing(8),
    paddingTop: spacing(3)
  }
};

export default styles;
