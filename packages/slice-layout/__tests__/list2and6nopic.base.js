import React from "react";
import { iterator } from "@times-components/test-utils";
import createItem from "./utils";
import { ListTwoAndSixNoPic } from "../src/slice-layout";

export default renderComponent => {
  const tests = [
    {
      name: "eight child element",
      test() {
        const output = renderComponent(
          <ListTwoAndSixNoPic
            renderLead1={() => createItem("lead-1")}
            renderLead2={() => createItem("lead-2")}
            renderSupport1={() => createItem("support-1")}
            renderSupport2={() => createItem("support-2")}
            renderSupport3={() => createItem("support-3")}
            renderSupport4={() => createItem("support-4")}
            renderSupport5={() => createItem("support-5")}
            renderSupport6={() => createItem("support-6")}
          />
        );

        expect(output).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
