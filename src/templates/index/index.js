import React from 'react'
import {graphql} from "gatsby";
import {Box} from "@material-ui/core";
import useStyles from "../../components/Page/style"
import TicketsHome from "./tickets";
import LineupHome from "./lineup";
import HomeHeader from "./header";
import Aftermovie from "./aftermovie";
import Gallery from "./gallery";

const IndexPageTemplate = ({data}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <HomeHeader />
            <Box className={classes.content}>
                <LineupHome />
                <TicketsHome />
                <Aftermovie />
                <Gallery items={data.markdownRemark.frontmatter.images} />
            </Box>
        </Box>
    )
}

export const pageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                description
                images {
                    image {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1.5, layout: CONSTRAINED)
                        }
                    }
                    alt
                }
            }
        }
    }
`

export default IndexPageTemplate