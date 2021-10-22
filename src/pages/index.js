import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import IndexPageTemplate from "../templates";

const IndexPage = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <IndexPageTemplate data={data} />
        </Page>
    )
}

export const pageQuery = graphql`
    query IndexPage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/index)/"}) {
            html
            frontmatter {
                title
                description
                images {
                    image {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.5, layout: CONSTRAINED)
                        }
                    }
                    alt
                }
            }
        }
    }
`

export default IndexPage