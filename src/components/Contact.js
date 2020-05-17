import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import HTMLContent from 'gatsby-theme-psg/src/components/Content'

export default () => {
    const data = useStaticQuery(graphql`
        query ContactQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "contact"}}) {
                html
                frontmatter {
                    title
                }
            }
        }`
    )
    return (
        <React.Fragment>
            <h2 className="">
                Antwoord niet gevonden?
            </h2>
            <HTMLContent className="content" content={data.markdownRemark.html}/>
        </React.Fragment>
    )
}