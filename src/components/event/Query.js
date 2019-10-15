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
                eventbrite
                url
                date
                dateLong: date(formatString: "dddd DD MMMM YYYY", locale: "nl-NL")
                dateMedium: date(formatString: "MMMM YYYY", locale: "nl-NL")
                dateShort: date(formatString: "DD MMM", locale: "nl-NL")
                timetable {
                  childImageSharp {
                    fluid(maxWidth: 1024, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
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