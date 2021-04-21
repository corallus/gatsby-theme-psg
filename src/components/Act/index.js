import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import {graphql} from 'gatsby'
import {lineupParams} from "../../params";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import useStyles from "./style";

const Act = ({act}) => {
    const classes = useStyles();

    const artist = act.artist
    return (
        <Card className={classes.root}>
            <CardMedia>
                {act.announced &&
                <GatsbyImage
                    image={act.image?.childImageSharp.gatsbyImageData || artist.frontmatter.image.childImageSharp.gatsbyImageData}
                    alt={artist.frontmatter.title}
                />
                }
            </CardMedia>
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h3">
                    {act.announced
                        ?
                        artist.frontmatter.title
                        :
                        lineupParams.artist.emptyText
                    }
                </Typography>
            </CardContent>
        </Card>
    );
}

export const query = graphql`
    fragment Artist on MarkdownRemark {
        id
        html
        frontmatter {
            title
            templateKey
            image {
                childImageSharp {
                    gatsbyImageData(aspectRatio: 1.33, layout: FULL_WIDTH)
                }
            }
        }
    }
`

export default Act
