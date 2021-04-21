import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../../components/Page";
import {Container, Grid} from "@material-ui/core";
import Gallery from "./item";

const GalleryPageTemplate = ({data}) => {
    const galleries = data.markdownRemark.frontmatter.galleries
    const length = galleries.length
    const pageSize = 3
    const pages = Math.ceil(length/pageSize)

    return (
        <Page markdown={data.markdownRemark}>
            <Container>
                {[...Array(pages)].map((e, i) =>
                    //<Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
                    <Grid direction={i%2===0 ? 'row': 'row-reverse'} container spacing={3} key={i}>
                        <Grid xs={12} md={8} item>
                            <Gallery
                                data={galleries[i*pageSize]}
                            />
                        </Grid>
                        {length > i * pageSize + 1 &&
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={3} key={i}>
                                <Grid xs={12} item>
                                    <Gallery
                                        data={galleries[i*pageSize+1]}
                                    />
                                </Grid>
                                {length > i * pageSize + 2 &&
                                <Grid xs={12} item>
                                    <Gallery
                                        data={galleries[i*pageSize+2]}
                                    />
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                        }
                    </Grid>
                )}
            </Container>
        </Page>
    )
}

export const query = graphql`
    query GalleryPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
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

export default GalleryPageTemplate