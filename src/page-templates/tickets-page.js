import React from 'react'
import Lineup from "../components/Lineup";
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import Tickets from "../components/Tickets";
import {Container} from "@material-ui/core";

const TicketsPageTemplate = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <Container>
                <Tickets />
            </Container>
        </Page>
    )
}

export const query = graphql`
    query TicketsPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default TicketsPageTemplate