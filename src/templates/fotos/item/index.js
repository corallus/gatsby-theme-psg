import {ButtonBase, Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import {GatsbyImage} from "gatsby-plugin-image";
import React from "react";
import useStyles from './style'

const Gallery = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <ButtonBase
                href={data.url}
                target={'_blank'}
                style={{display: 'block'}}
            >
                <CardMedia>
                    <GatsbyImage
                        image={data.image.childImageSharp.gatsbyImageData}
                        alt={data.naam}/>
                </CardMedia>
                <CardContent className={classes.content}>
                    <Typography variant={'h4'} component={'h3'}>
                        {data.naam}
                    </Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    )
}
export default Gallery
