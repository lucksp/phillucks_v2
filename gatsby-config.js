module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        fileName: false,
        pure: true
      }
    },
  ]
};
