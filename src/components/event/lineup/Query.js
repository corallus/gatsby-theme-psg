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
                    ...ArtistFragment
                }
                event {
                    id
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