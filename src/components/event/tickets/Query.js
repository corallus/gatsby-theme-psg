import { useStaticQuery, graphql } from "gatsby"

export const useTicketsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TicketsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "ticket" } } }
        ) {
          edges {
            node {
              ...Ticket
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}