import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto'
    }
}))
export default ({ title }) => {
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
    return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={title} className={classes.root} />;
}
