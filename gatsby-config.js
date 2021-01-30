/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Hi! I'm Brad!`,
    description: `This is my personal site I built using gatsby! I am a web developer living in Brooklyn who graduated from NYU this past summer as a computer science major. Learn all about me and my work here!`,
    author: `Brad Davis`
  },
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
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, `gatsby-plugin-scroll-reveal`, `gatsby-plugin-catch-links`, `gatsby-plugin-fontawesome-css`, `gatsby-plugin-smoothscroll`, `gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
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
