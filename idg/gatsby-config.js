const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Application`,
    description: `Brand neutral application flow`,
    author: `@joestrouth1`,
    siteUrl: 'https://application.demo.joes.house',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        // isTsx: true
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `idg`,
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: `Ideal`,
        start_url: `/`,
        background_color: `#fffafa`,
        theme_color: `#ae0011`,
        /* eslint-enable @typescript-eslint/camelcase */
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // to completely remove a previous service worker from plugin-offline, use gatsby-plugin-remove-serviceworker in its place
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        config: {
          path: path.resolve(__dirname, 'postcss.config.js'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {},
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.joes.house`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#0A7E76`,
        // Disable the loading spinner.
        // showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['normalize.css', 'typeface-open-sans'],
        whitelistPatterns: [/^nprogress/],
      },
    },
  ],
}
