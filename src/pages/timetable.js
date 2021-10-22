import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import TimetablePageTemplate from "../templates/timetable";

const TimetablePage = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            <TimetablePageTemplate data={data} />
        </Page>
    )
}

export const query = graphql`
    query TimetablePage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/timetable)/"}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default TimetablePage