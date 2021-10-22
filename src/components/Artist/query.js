import {graphql} from "gatsby";

export const query = graphql`
    fragment Artist on MarkdownRemark {
        id
        html
        frontmatter {
            title
            templateKey
            image {
                childImageSharp {
                    gatsbyImageData(aspectRatio: 1.33, layout: FULL_WIDTH)
                }
            }
        }
    }
`

