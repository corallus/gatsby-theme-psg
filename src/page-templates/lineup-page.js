import React from 'react'
import Section from "../components/Section";
import Lineup from "../components/Lineup";
import {graphql} from "gatsby";

const LineupPageTemplate = ({data}) => {
    return (
        <Section title={'Lineup'} link={'/lineup'}>
            <Lineup />
        </Section>
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