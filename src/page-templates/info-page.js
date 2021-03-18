import React from 'react'
import Section from "../components/Section";
import {graphql} from "gatsby";
import Info from "../components/Info";
import Contact from "../components/Contact";
import {Page} from "../components/Page";

const InfoPageTemplate = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            {data.allMarkdownRemark.group.map((group, i) =>
                <Section title={group.fieldValue} key={i}>
                    <Info items={group.nodes}/>
                </Section>
            )}
            <Section title={'Antwoord niet gevonden?'}>
                <Contact />
            </Section>
        </Page>
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