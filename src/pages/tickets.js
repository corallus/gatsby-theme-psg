import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import TicketsPageTemplate from "../templates/tickets";

const TicketsPage = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <TicketsPageTemplate data={data} />
        </Page>
    )
}

export const query = graphql`
    query TicketsPage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/tickets)/"}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default TicketsPage