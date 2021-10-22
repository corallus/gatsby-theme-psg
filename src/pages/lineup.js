import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import LineupPageTemplate from "../templates/lineup";

const LineupPage = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <LineupPageTemplate data={data} />
        </Page>
    )
}

export const query = graphql`
    query LineupPage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/lineup)/"}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default LineupPage