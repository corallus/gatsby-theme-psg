import React from 'react'
import {Box, Container, Typography} from "@material-ui/core";
import useStyles from "./style";

export const Header = ({markdown}) => {
    const classes = useStyles();
    return (
        <Box component={'header'} className={classes.root}>
            <Container className={classes.container}>
                <Typography variant={"h1"} component={"h1"} className={classes.header}>
                    <Box component={'span'} className={classes.title}>
                        {markdown.frontmatter.title}
                    </Box>
                </Typography>
                <div className={classes.body} dangerouslySetInnerHTML={{__html: markdown.html}} />
            </Container>
        </Box>
    )
}