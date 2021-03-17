import React from 'react'
import Section from "../components/Section";
import Lineup from "../components/Lineup";
import {graphql} from "gatsby";

const TimetablePageTemplate = ({data}) => {
    return (
        <Section title={'Lineup'} link={'/lineup'}>
            <Lineup />
        </Section>
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