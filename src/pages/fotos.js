import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../components/Page";
import GalleryPageTemplate from "../templates/fotos";

const GalleryPage = ({data}) => {

    return (
        <Page markdown={data.markdownRemark}>
            <GalleryPageTemplate data={data} />
        </Page>
    )
}

export const query = graphql`
    query GalleryPage {
        markdownRemark(fileAbsolutePath: {regex: "/(pages/fotos)/"}) {
            html
            frontmatter {
                title
                description
                galleries {
                    image {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.333, layout: FULL_WIDTH)
                        }
                    }
                    naam
                    url
                }
            }
        }
    }
`

export default GalleryPage