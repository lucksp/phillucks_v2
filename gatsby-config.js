module.exports = {
  siteMetadata: {
    title: `Phil Lucks, Front End Engineer`
  },
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
    [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Righteous,`,
            `Montserrat\:300,400` // you can also specify font weights and styles
          ],
          display: 'block'
        }
      }
    ]
  ]
};
