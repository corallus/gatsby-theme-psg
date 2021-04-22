import React from 'react'
import {Card, CardMedia, Grid, withWidth} from "@material-ui/core";
import {GatsbyImage} from "gatsby-plugin-image";
import {Slide} from "../../../shared/slide";
import Section from "../../../components/Section";
import useStyles from "./style";

const Gallery = ({items, ...props}) => {
    const classes = useStyles()
    const pageSizes = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3
    }
    const pageSize = pageSizes[props.width]

    const Row = ({items}) => {
        return (
            <Grid container spacing={3}>
                {items.map((image, j) => (
                    <Grid xs={12/pageSizes['xs']} sm={12/pageSizes['sm']} md={12/pageSizes['md']} lg={12/pageSizes['lg']} xl={12/pageSizes['xl']} item key={j}>
                        <Card>
                            <CardMedia>
                                <GatsbyImage
                                    image={image.image.childImageSharp.gatsbyImageData}
                                    alt={image.alt || ''} />
                            </CardMedia>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        <Section classes={classes} linkName={'Bekijk alle foto\'s'}>
            <Slide pageSize={pageSize} items={items} Component={Row} />
        </Section>
    )
}

export default withWidth()(Gallery);