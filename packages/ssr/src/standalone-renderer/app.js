/* eslint-disable no-console */

const express = require("express");
const shrinkRay = require("shrink-ray");

const ssr = require("../server");
const makeArticleUrl = require("../lib/make-url");
const logger = require("../lib/simple-logger");

const port = 3000;
const server = express();
const graphqlApiUrl = process.env.GRAPHQL_ENDPOINT;
if (!graphqlApiUrl) {
  throw new Error("GRAPHQL_ENDPOINT is not defined");
}

server.use(shrinkRay());
server.use(express.static("dist"));
server.use((err, req, res) => {
  logger.error(err.stack);
  res.status(500).send(err.stack);
});

const makeHtml = (
  initialState,
  initialProps,
  { bundleName, markup, responsiveStyles, styles, title }
) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
            ${styles}
            ${responsiveStyles}
            <script src="https://c.amazon-adsystem.com/aax2/apstag.js"></script>
            <script src="https://www.googletagservices.com/tag/js/gpt.js"></script>
            <script src="https://www.thetimes.co.uk/d/js/vendor/newPrebid.min-7526ce2390.js"></script>
          </head>
          <body style="margin:0">
            <script>window.nuk = {graphqlapi: {url: "${
              process.env.GRAPHQL_ENDPOINT
            }"}, tracking: {enabled: false}};</script>
            ${initialProps}
            ${initialState}
            <div id="main-container">${markup}</div>
          </body>
          <script src="/common.react.bundle.js"></script>
          <script src="/${bundleName}.init.js"></script>
          <script src="/${bundleName}.react.bundle.js"></script>
        </html>
      `;

const toNumber = input => {
  const parsed = Number.parseInt(input, 10);

  if (Number.isNaN(parsed)) {
    return null;
  }

  return parsed;
};

server.get("/article/:id", (request, response, next) => {
  const {
    params: { id: articleId }
  } = request;
  const headers = process.env.GRAPHQL_TOKEN
    ? {
        "nuk-tpatoken": process.env.GRAPHQL_TOKEN
      }
    : null;

  ssr
    .article(articleId, headers, { graphqlApiUrl, logger, makeArticleUrl })
    .then(({ initialProps, initialState, markup, responsiveStyles, styles }) =>
      response.send(
        makeHtml(initialState, initialProps, {
          bundleName: "article",
          markup,
          responsiveStyles,
          styles,
          title: "Article"
        })
      )
    ).catch(err => {
      next(err);
    });
});

server.get("/profile/:slug", (request, response, next) => {
  const {
    params: { slug: authorSlug },
    query: { page }
  } = request;
  const currentPage = toNumber(page) || 1;
  

  ssr
    .authorProfile(
      { authorSlug, currentPage },
      { graphqlApiUrl, logger, makeArticleUrl }
    )
    .then(({ initialProps, initialState, markup, responsiveStyles, styles }) =>
      response.send(
        makeHtml(initialState, initialProps, {
          bundleName: "author-profile",
          markup,
          responsiveStyles,
          styles,
          title: authorSlug
        })
      )
    ).catch(err => {
      next(err);
    });
});

server.get("/topic/:slug", (request, response, next) => {
  const {
    params: { slug: topicSlug },
    query: { page }
  } = request;
  const currentPage = toNumber(page) || 1;

  ssr
    .topic(
      { currentPage, topicSlug },
      { graphqlApiUrl, logger, makeArticleUrl }
    )
    .then(({ initialProps, initialState, markup, responsiveStyles, styles }) =>
      response.send(
        makeHtml(initialState, initialProps, {
          bundleName: "topic",
          markup,
          responsiveStyles,
          styles,
          title: topicSlug
        })
      )
    ).catch(err => {
      next(err);
    });
});

const serviceName = "Stand-alone renderer server";

const App = server.listen(port, () =>
  console.log(`🚀  ${serviceName} ready at http://localhost:${port}`)
);

process.on("SIGTERM", () => {
  App.close(() => {
    console.log(`${serviceName} closed`);
  });
});
