import { useStaticQuery, graphql } from "gatsby"

export const useLineupQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query LineupQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "act" }, lineup: { eq: true } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              html
              frontmatter {
                artist {
                    html
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                event {
                    id
                    frontmatter {
                        date
                    }
                }
                lineup
                announced
                templateKey
                time
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}