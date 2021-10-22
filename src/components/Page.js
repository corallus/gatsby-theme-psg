import React from 'react'
import {Helmet} from "react-helmet";

export const Page = ({markdown, children}) => {
    return (
        <>
            <Helmet>
                <title>{markdown.title}</title>
                <meta name="description" content={markdown.description}/>
                <meta property="og:title" content={markdown.title}/>
                <meta property="og:url" content="/"/>
            </Helmet>
            {children}
        </>
    )
}
