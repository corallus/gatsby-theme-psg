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
                early_bird
                status
                date(formatString: "dddd DD MMMM YYYY", locale: "nl-NL")
                dateMedium: date(formatString: "MMMM YYYY", locale: "nl-NL")
                dateShort: date(formatString: "DD MMM", locale: "nl-NL")
                tickets {
                  name
                  price
                  price_early
                  url
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