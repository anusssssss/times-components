import React from "react";
import { iterator } from "@times-components/test-utils";
import createItem from "./utils";
import { SecondaryTwoNoPicAndTwoSlice } from "../src/slice-layout";

export default renderComponent => {
  const tests = [
    {
      name: "four child elements",
      test() {
        const output = renderComponent(
          <SecondaryTwoNoPicAndTwoSlice
            renderSecondary1={() => createItem("secondary-1")}
            renderSecondary2={() => createItem("secondary-2")}
            renderSupport1={() => createItem("support-1")}
            renderSupport2={() => createItem("support-2")}
          />
        );

        expect(output).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
