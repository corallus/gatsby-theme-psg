import React from 'react'
import {Grid, withWidth} from "@material-ui/core";
import {galleryParams} from "../../../params";
import {GatsbyImage} from "gatsby-plugin-image";
import {Slide} from "../../../shared/slide";
import Section from "../../../components/Section";
import {useStyles} from "./style";

const GalleryHome = ({items, ...props}) => {
    const classes = useStyles()
    const pageSizes = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4
    }
    const pageSize = pageSizes[props.width]

    const Row = ({items}) => {
        return (
            <Grid container spacing={3}>
                {items.map((image, j) => (
                    <Grid xs={12/pageSizes['xs']} sm={12/pageSizes['sm']} md={12/pageSizes['md']} lg={12/pageSizes['lg']} xl={12/pageSizes['xl']} item {...galleryParams.colProps} key={j}>
                        <GatsbyImage
                            image={image.image.childImageSharp.gatsbyImageData}
                            className="rounded"
                            alt={image.alt || ''} />
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        <Section classes={classes} title={'Gallery'} link={'/gallery'} linkName={'Bekijk alle foto\'s'}>
            <Slide pageSize={pageSize} items={items} Component={Row} />
        </Section>
    )
}

export default withWidth()(GalleryHome);