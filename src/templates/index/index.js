import React from 'react'
import {graphql} from "gatsby";
import {Box} from "@material-ui/core";
import useStyles from "../../components/Page/style"
import TicketsHome from "./tickets";
import LineupHome from "./lineup";
import GalleryHome from "./gallery";
import HomeHeader from "./header";

const IndexPageTemplate = ({data}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <HomeHeader />
            <Box className={classes.content}>
                <LineupHome />
                <TicketsHome />
                <GalleryHome items={data.markdownRemark.frontmatter.images} />
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
                            gatsbyImageData(width: 900, height: 600, quality: 90, layout: CONSTRAINED)
                        }
                    }
                    alt
                }
            }
        }
    }
`

export default IndexPageTemplate