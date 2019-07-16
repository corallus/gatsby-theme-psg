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
      showLogo: themeOptions.showLogo,
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
          modulePath: `${__dirname}/src/cms.js`,
          manualInit: true,
          enableIdentityWidget: false,
          manualInit: true,
          publicPath: 'admin',
          htmlTitle: 'Content Manager'
        },
      },
      {
        resolve: 'gatsby-plugin-sitemap',
        options: {
          exclude: ["/kruidvat"],
        }
      },
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
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: ['gatsby-theme-psg']
        }
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
  }
}
