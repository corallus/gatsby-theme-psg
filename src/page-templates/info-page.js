import React from 'react'
import Section from "../components/Section";
import {graphql} from "gatsby";
import Info from "../components/Info";
import Contact from "../components/Contact";
import {Box, Container} from "@material-ui/core";

const InfoPageTemplate = ({data}) => {
    return (
        <>
            {data.allMarkdownRemark.group.map((group, i) =>
                <Section title={group.fieldValue} key={i}>
                    <Info items={group.nodes}/>
                </Section>
            )}
            <Box component={'section'}>
                <Container>
                    <Contact />
                </Container>
            </Box>
        </>
    )
}

export const query = graphql`
    query InfoPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
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

export default InfoPageTemplate