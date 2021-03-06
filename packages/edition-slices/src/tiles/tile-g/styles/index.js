import { colours, fontFactory, spacing } from "@times-components/styleguide";

const styles = {
  container: {
    flexDirection: "row",
    padding: spacing(2)
  },
  headline: {
    ...fontFactory({
      font: "headline",
      fontSize: "infoTitle"
    })
  },
  imageContainer: {
    borderColor: colours.functional.contrast,
    borderWidth: 1,
    overflow: "hidden",
    width: "30%"
  },
  summaryContainer: {
    paddingHorizontal: spacing(2),
    paddingTop: spacing(1),
    width: "70%"
  }
};

export default styles;
