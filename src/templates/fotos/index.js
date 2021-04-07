import React from 'react'
import {graphql} from "gatsby";
import {Page} from "../../components/Page";
import {ButtonBase, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {GatsbyImage} from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    card: {
        position: 'relative'
    },
    gridContainer: {

    },
    footer: {
        display: 'block',
        position: "absolute",
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: theme.spacing(1),
        color: theme.palette.primary.main,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textTransform: 'uppercase'
    },
}));
const GalleryPageTemplate = ({data}) => {
    const classes = useStyles();

    const galleries = data.markdownRemark.frontmatter.galleries
    const length = galleries.length
    const pageSize = 3
    const pages = Math.ceil(length/pageSize)

    const Gallery = ({data}) => {
        return (
            <ButtonBase
                className={classes.card}
                href={data.url}
            >
                <GatsbyImage
                    image={data.image.childImageSharp.gatsbyImageData}
                    aspectRatio={800/600}
                    alt={'placeholder'} />
                <div className={classes.footer}>
                    <Typography variant={'h4'} component={'h3'}>
                        {data.naam}
                    </Typography>
                </div>
            </ButtonBase>
        )
    }

    return (
        <Page markdown={data.markdownRemark}>
            <Container className={classes.root}>
                {[...Array(pages)].map((e, i) =>
                    //<Component key={i} items={items.slice(i*pageSize, (i+1) * (pageSize))} />
                    <Grid direction={i%2===0 ? 'row': 'row-reverse'} className={classes.gridContainer} container spacing={1} key={i}>
                        <Grid md={8} item>
                            <Gallery
                                data={galleries[i*pageSize]}
                                aspectRatio={800/600} />
                        </Grid>
                        {length > i * pageSize + 1 &&
                        <Grid item md={4}>
                            <Grid xs={12} item>
                                <Gallery
                                    data={galleries[i*pageSize+1]}
                                    aspectRatio={800/600} />
                            </Grid>
                            {length > i * pageSize + 2 &&
                            <Grid xs={12} item>
                                <Gallery
                                    data={galleries[i*pageSize+2]}
                                    aspectRatio={800/600} />
                            </Grid>
                            }
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
                            gatsbyImageData(aspectRatio: 1.3)
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