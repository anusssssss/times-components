import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { colours } from "@times-components/styleguide";
import { IconDiamond } from "@times-components/icons";
import { gqlRgbaToHex, gqlRgbaToStyle } from "@times-components/utils";
import styles from "./style";
import {
  articleFlagPropTypes,
  articleFlagsPropTypes,
  articleFlagDefaultProps
} from "./article-flag-prop-types";

const ArticleFlag = ({ title, color }) => (
  <View style={styles.view}>
    <View style={styles.diamond}>
      <IconDiamond
        fillColour={gqlRgbaToHex(color) || color}
        height={8}
        width={8}
      />
    </View>
    <Text
      accessibilityLabel={`${title} Flag`}
      style={[styles.title, { color: gqlRgbaToStyle(color) || color }]}
      testID={`flag-${title}`}
    >
      {title.toLowerCase()}
    </Text>
  </View>
);

ArticleFlag.propTypes = {
  ...articleFlagPropTypes,
  title: PropTypes.string.isRequired
};

ArticleFlag.defaultProps = articleFlagDefaultProps;

const NewArticleFlag = props => <ArticleFlag {...props} title="new" />;
const UpdatedArticleFlag = props => <ArticleFlag {...props} title="updated" />;
const ExclusiveArticleFlag = props => (
  <ArticleFlag {...props} title="exclusive" />
);
const SponsoredArticleFlag = props => (
  <ArticleFlag {...props} title="sponsored" />
);

NewArticleFlag.propTypes = articleFlagPropTypes;
NewArticleFlag.defaultProps = {
  color: colours.functional.articleFlagNew
};

UpdatedArticleFlag.propTypes = articleFlagPropTypes;
UpdatedArticleFlag.defaultProps = {
  color: colours.functional.articleFlagUpdated
};

ExclusiveArticleFlag.propTypes = articleFlagPropTypes;
ExclusiveArticleFlag.defaultProps = {
  color: colours.functional.articleFlagExclusive
};

SponsoredArticleFlag.propTypes = articleFlagPropTypes;
SponsoredArticleFlag.defaultProps = {
  color: colours.functional.tertiary
};

const flagsMapping = color =>
  new Map([
    ["NEW", <NewArticleFlag color={color} />],
    ["UPDATED", <UpdatedArticleFlag color={color} />],
    ["EXCLUSIVE", <ExclusiveArticleFlag color={color} />],
    ["SPONSORED", <SponsoredArticleFlag color={color} />]
  ]);

const ArticleFlags = ({ flags, color }) => {
  if (!flags || flags.length === 0) return null;
  return (
    <View style={styles.flags}>
      {flags.map(flag => (
        <View key={flag} style={styles.flag}>
          {flagsMapping(color).get(flag)}
        </View>
      ))}
    </View>
  );
};

ArticleFlags.propTypes = articleFlagsPropTypes;
ArticleFlags.defaultProps = {
  flags: []
};

export default ArticleFlag;

export {
  ArticleFlags,
  NewArticleFlag,
  UpdatedArticleFlag,
  ExclusiveArticleFlag,
  SponsoredArticleFlag
};
