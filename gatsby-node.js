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
      image: File @fileByRelativePath
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