const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      templateKey: String
      aftermovie: String
      description: String
      image: File @fileByRelativePath
      images: [MarkdownRemarkFrontmatterImages]
      location: String
      name: String
      eventbrite: String
      url: String
      links: [MarkdownRemarkFrontmatterLinks]
      status: String
      date: Date @dateformat
      datetime: Date @dateformat
      early_bird: Date @dateformat
      active: Boolean
      stages: [MarkdownRemarkFrontmatterStages]
      galleries: [MarkdownRemarkFrontmatterGalleries]
      tickets: [MarkdownRemarkFrontmatterTickets]
      timetable: File @fileByRelativePath
      category: String
      order: Int
      events: [MarkdownRemark] @link(by: "frontmatter.title")
      event: MarkdownRemark @link(by: "frontmatter.title")
    }
    type MarkdownRemarkFrontmatterImages {
      alt: String
      image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterLinks {
      name: String
      url: String
    }

    type MarkdownRemarkFrontmatterStages {
      name: String
      acts: [MarkdownRemarkFrontmatterStagesActs]
    }
    
    type MarkdownRemarkFrontmatterGalleries {
      naam: String
      image: File @fileByRelativePath
      url: String
    }

    type MarkdownRemarkFrontmatterStagesActs {
      artist: MarkdownRemark @link(by: "frontmatter.title")
      announced: Boolean
    }

    type MarkdownRemarkFrontmatterTickets {
      title: String
      price: Float
      price_early: Float
      url: String
      body: String
    }

    type MarkdownRemarkFields {
      slug: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(pages)/.*\.md$/"}}
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: `${__dirname}/src/templates/${String(edge.node.parent.name)}/index.js`,
        // additional data can be passed via context
        context: {
          id,
          title: edge.node.frontmatter.title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}