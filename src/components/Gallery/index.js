import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import {galleryParams} from "../../params";
import {Slide} from "../../shared/slide";
import {Grid} from "@material-ui/core";

export const Gallery = ({items}) => {
    const pageSize = 3

    const Row = ({items}) => {
       return (
           <Grid container spacing={3}>
               {items.map((image, j) => (
                   <Grid xs={12/pageSize} item {...galleryParams.colProps} key={j}>
                       <GatsbyImage
                           image={image.image.childImageSharp.gatsbyImageData}
                           className="rounded"
                           alt={image.alt | ''} />
                   </Grid>
               ))}
           </Grid>
       )
    }
    return (
        <Slide pageSize={pageSize} items={items} Component={Row} />
    )
}

export default Gallery
