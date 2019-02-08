import { fonts, spacing } from "@times-components/styleguide";

const styles = {
  container: {
    paddingBottom: spacing(1),
    paddingHorizontal: spacing(8),
    paddingTop: spacing(4)
  },
  imageStyle: {
    height: 51,
    margin: "auto",
    width: 283
  },
  keySeperator: {
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
    borderStyle: "solid",
    marginHorizontal: spacing(2)
  },
  leadText: {
    color: "#850029",
    fontFamily: fonts.bodyRegular,
    fontSize: 16,
    lineHeight: spacing(3)
  },
  leadTextContainer: {
    paddingBottom: spacing(1),
    paddingTop: spacing(2)
  },
  text: {
    textAlign: "center"
  }
};

export default styles;
