import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

const ActImage = ({act}) => {

    const artist = act.artist

    const image = act.image?.childImageSharp.gatsbyImageData || artist.frontmatter.image?.childImageSharp.gatsbyImageData

    return (
        <GatsbyImage
            image={image}
            alt={artist.frontmatter.title}
        />
    );
}

export default ActImage
