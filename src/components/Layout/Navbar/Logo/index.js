import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import useStyles from "./style";

const Logo = () => {
    const classes = useStyles();
    const data = useStaticQuery(
        graphql`{
            file(relativePath: {eq: "logo.png"}) {
                childImageSharp {
                    gatsbyImageData(height: 50, layout: FIXED)
                }
            }
        }
        `
    )
    return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={'logo'} className={classes.root} />;
}

export default Logo
