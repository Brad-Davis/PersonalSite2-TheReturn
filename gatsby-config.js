/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-5X9QR3PFG"
        ],
      },
    },
    `gatsby-plugin-scroll-reveal`, `gatsby-plugin-fontawesome-css`, `gatsby-plugin-smoothscroll`, `gatsby-plugin-react-helmet`, 
  {
    resolve: "gatsby-plugin-antd",
    options: {
      style: true,
    },
  },
  {
    resolve: "gatsby-plugin-less",
    options: {
      javascriptEnabled: true,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Walter Turncoat', 'Josefin Sans']
      }
    }
  }],
}
