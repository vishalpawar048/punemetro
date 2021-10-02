module.exports = {
  siteMetadata: {
    siteUrl: "https://punemetroofficial.gatsbyjs.io/",
    title: "punemetroofficial",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",


    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-147726857-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pune Metro`,
        short_name: `Pune Metro`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
