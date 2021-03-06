import { Dimensions } from "react-native";
import { tabletRowPadding, tabletWidth } from "@times-components/styleguide";

export const acceptedWidths = [
  320,
  440,
  660,
  800,
  1080,
  1280,
  1440,
  1670,
  1920,
  2308,
  2736
];

export const normaliseWidth = width => {
  const nWidth = acceptedWidths.find(w => width <= w);

  return nWidth || acceptedWidths[acceptedWidths.length - 1];
};

export const screenWidth = isTablet =>
  isTablet ? tabletWidth - tabletRowPadding : Dimensions.get("window").width;
