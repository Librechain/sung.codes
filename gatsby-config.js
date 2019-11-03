module.exports = {
  siteMetadata: {
    title: `Sung.Codes`,
    description: `Sung M. Kim (aka dance2die)'s Home Page`,
    author: `Sung M. Kim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=gatsby-plugin-mdx#gatsby-remark-plugins
        // https://www.gatsbyjs.org/packages/gatsby-remark-liquid-tags/?=liquid
        gatsbyRemarkPlugins: [
          // https://www.gatsbyjs.org/packages/gatsby-remark-embed-gist/
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "dance2die",
              includeDefaultCss: true,
            },
          },
          `gatsby-remark-embedder`,
          `gatsby-remark-liquid-tags`,
          { resolve: "gatsby-remark-copy-linked-files" },
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "#fafafa",
              maxWidth: 1035,
            },
          },
          { resolve: "gatsby-remark-embedder" },
          // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=gatsby-remark-prismjs
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: { sh: "bash", react: "jsx" },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-remark-images",
      options: {
        backgroundColor: "#fafafa",
        maxWidth: 1035,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/styles/*.scss"],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      // refer to following documentation for options
      // https://www.styled-components.com/docs/tooling#babel-plugin
      options: {
        fileName: false,
        pure: true,
        transpileTemplateLiterals: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            subsets: [`latin`],
            variants: [`400`],
          },
          {
            family: `Hind Madurai`,
            subsets: [`latin`],
            variants: [`400`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
