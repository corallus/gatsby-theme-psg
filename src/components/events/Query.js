import { useStaticQuery, graphql } from "gatsby"

export const useEventsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query EventsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                name
                templateKey
                location
                date(formatString: "dddd DD MMMM YYYY", locale: "nl-NL")
                tickets {
                  name
                  price
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}