import {graphql} from "gatsby";

export const query = graphql`
    fragment Topic on MarkdownRemark {
        html
        excerpt(pruneLength: 400)
        id
        fields {
            slug
        }
        frontmatter {
            order
            title
            category
            templateKey
            events {
                id
            }
        }
    }
`
