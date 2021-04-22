import {graphql, useStaticQuery} from "gatsby"

export const useEventsQuery = () => {
  const {allMarkdownRemark} = useStaticQuery(
      graphql`query EventsQuery {
        allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "event"}}}
        ) {
          nodes {
            id
            html
            frontmatter {
              stages {
                name
                acts {
                  artist {
                    ...Artist
                  }
                  announced
                }
              }
              tickets {
                title
                url
                price
                price_early
                body
              }
              name
              templateKey
              location
              early_bird
              status
              eventix
              aftermovie
              url
              links {
                name
                url
              }
              date
              active
              dateLong: date(formatString: "dddd DD MMMM YYYY", locale: "nl-NL")
              dateMedium: date(formatString: "DD MMMM YYYY", locale: "nl-NL")
              dateShort: date(formatString: "DD MMM", locale: "nl-NL")
              timetable {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
      `
  )
  return allMarkdownRemark.nodes
}