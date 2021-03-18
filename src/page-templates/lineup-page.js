import React from 'react'
import Lineup from "../components/Lineup";
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import {Container} from "@material-ui/core";

const LineupPageTemplate = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <Container>
                <Lineup />
            </Container>
        </Page>
    )
}

export const query = graphql`
    query LineupPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default LineupPageTemplate