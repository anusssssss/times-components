import React from "react";
import PropTypes from "prop-types";
import { TileImage, TileLink, TileSummary } from "../shared";
import styles from "./styles";

const TileA = ({ onPress, tile }) => (
  <TileLink onPress={onPress} tile={tile}>
    <TileSummary
      headlineStyle={styles.headline}
      style={styles.summaryContainer}
      tile={tile}
    />
    <TileImage
      aspectRatio={16 / 9}
      style={styles.imageContainer}
      uri={tile.article.leadAsset.crop169.url}
    />
  </TileLink>
);

TileA.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired
};

export default TileA;
