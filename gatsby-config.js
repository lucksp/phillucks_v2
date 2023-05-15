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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Righteous`,
          `Montserrat\:300,400`
        ],
        display: 'block'
      }
    }
  ]
};
