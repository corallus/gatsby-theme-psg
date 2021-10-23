import React from 'react'
import {Helmet} from "react-helmet";

export const Page = ({markdown, children}) => {
    return (
        <>
            <Helmet>
                <title>{markdown.frontmatter.title}</title>
                <meta name="description" content={markdown.frontmatter.description}/>
                <meta property="og:title" content={markdown.frontmatter.title}/>
                <meta property="og:url" content="/"/>
            </Helmet>
            {children}
        </>
    )
}
