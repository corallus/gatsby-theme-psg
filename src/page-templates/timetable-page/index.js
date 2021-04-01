import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../../components/Page";
import {Container} from "@material-ui/core";

const TimetablePageTemplate = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <Container>
            </Container>
        </Page>
    )
}

export const query = graphql`
    query TimetablePage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default TimetablePageTemplate