/* eslint-disable import/no-unresolved */

const React = require("react");
const { ApolloProvider } = require("react-apollo");
const { TopicProvider } = require("@times-components/provider");
const Context = require("@times-components/context").default;
const { scales } = require("@times-components/styleguide");
const Topic = require("@times-components/topic").default;
const makeArticleUrl = require("./make-url");

const scale = scales.large;
const sectionColour = "#FFFFFF";

module.exports = (client, slug, page) =>
  React.createElement(
    ApolloProvider,
    { client },
    React.createElement(
      TopicProvider,
      {
        debounceTimeMs: 0,
        slug
      },
      ({ isLoading, error, refetch, topic }) =>
        React.createElement(
          Context.Provider,
          { value: { makeArticleUrl, theme: { scale, sectionColour } } },
          React.createElement(Topic, {
            adConfig: {},
            analyticsStream: () => {},
            error,
            isLoading,
            onArticlePress: () => {},
            onTwitterLinkPress: () => {},
            page,
            refetch,
            slug,
            topic
          })
        )
    )
  );
