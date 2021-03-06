import React from "react";
import { iterator } from "@times-components/test-utils";
import createItem from "./utils";
import { SecondaryFourSlice } from "../src/slice-layout";

export default renderComponent => {
  const tests = [
    {
      name: "four child element",
      test() {
        const output = renderComponent(
          <SecondaryFourSlice
            renderSecondary1={() => createItem("secondary-1")}
            renderSecondary2={() => createItem("secondary-2")}
            renderSecondary3={() => createItem("secondary-3")}
            renderSecondary4={() => createItem("secondary-4")}
          />
        );

        expect(output).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
