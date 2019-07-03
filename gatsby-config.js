const path = require('path')

module.exports = themeOptions => {
  return {
    siteMetadata: {
      siteUrl: themeOptions.siteUrl,
      title: themeOptions.title,
      description: themeOptions.description,
      social: themeOptions.social,
      navbarBackground: themeOptions.navbarBackground,
      navbarVariant: themeOptions.navbarVariant,
      menuItems: themeOptions.menuItems
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        resolve: 'gatsby-source-filesystem',
        options: {
          path: path.resolve('./static/media'),
          name: 'uploads',
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: path.resolve('./src/pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: path.resolve('./src/content'),
          name: 'content',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: path.resolve('./src/img'),
          name: 'images',
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-relative-images',
              options: {
                name: 'uploads',
              },
            },
            {
              resolve: 'gatsby-remark-images',
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 2048,
              },
            },
            {
              resolve: 'gatsby-remark-copy-linked-files',
              options: {
                destinationDir: 'static',
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: `${__dirname}/src/cms/cms.js`,
        },
      },
      {
        resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
        options: {
          develop: true, // Activates purging in npm run develop
          purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
        },
      }, // must be after other CSS plugins
      'gatsby-plugin-sitemap',
      {
        resolve: `gatsby-plugin-google-tagmanager`,
        options: {
          id: themeOptions.tagManager,

          // Include GTM in development.
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: false,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: themeOptions.title,
          short_name: themeOptions.titleShort,
          start_url: `/`,
          icon: path.resolve('./src/img/icon.png'),
          background_color: themeOptions.background_color,
          theme_color: themeOptions.theme_color,
          display: `standalone`,
        },
      },
      'gatsby-plugin-offline',
    ],
    mapping: {
      'MarkdownRemark.frontmatter.artists': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.mainact': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.artist': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.artist1': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.artist2': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.artist3': `MarkdownRemark.frontmatter.name`,
      'MarkdownRemark.frontmatter.info1': `MarkdownRemark.frontmatter.title`,
      'MarkdownRemark.frontmatter.info2': `MarkdownRemark.frontmatter.title`,
    },
  }
}
