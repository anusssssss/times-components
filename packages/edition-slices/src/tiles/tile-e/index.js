import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { TileImage, TileLink, TileSummary } from "../shared";
import styles from "./styles";

const TileE = ({ onPress, tile }) => (
  <TileLink onPress={onPress} tile={tile}>
    <View style={styles.container}>
      <TileImage
        aspectRatio={4 / 5}
        style={styles.imageContainer}
        uri={tile.article.leadAsset.crop45.url}
      />
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        tile={tile}
      />
    </View>
  </TileLink>
);

TileE.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired
};

export default TileE;
