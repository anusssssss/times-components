import React from "react";
import { Image as ReactNativeImage } from "react-native";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components/test-utils";
import "./mocks";
import Image from "../src";

const getLayoutEventForWidth = width => ({
  nativeEvent: { layout: { width } }
});

export default () => {
  const tests = [
    {
      name: "append offline=true on the first image only",
      test: () => {
        const uri =
          "http://example.com/image.jpg?crop=1016%2C677%2C0%2C0&resize=100";
        const testInstance = TestRenderer.create(
          <Image aspectRatio={3 / 2} highResSize={999} uri={uri} />
        );

        testInstance.root.children[0].props.onLayout(
          getLayoutEventForWidth(700)
        );

        const images = testInstance.root.findAll(
          node => node.type === ReactNativeImage
        );
        expect(images[0].props.source.uri).toEqual(`${uri}&offline=true`);
        expect(images[1].props.source.uri).toEqual(uri);
      }
    }
  ];

  iterator(tests);
};
