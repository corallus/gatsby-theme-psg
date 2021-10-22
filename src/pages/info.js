import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import InfoPageTemplate from "../templates/info";

const InfoPage = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <InfoPageTemplate data={data} />
        </Page>
    )
}

export const query = graphql`
    query InfoPage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/info)/"}) {
            html
            frontmatter {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___order] }
            filter: { frontmatter: { templateKey: { eq: "info" } } }
        ) {
            group(field: frontmatter___category) {
                fieldValue
                nodes {
                    ...Topic
                }
            }
        }
    }
`

export default InfoPage