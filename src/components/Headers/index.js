import React from 'react'
import {Box, Container, createStyles, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8, 0),
            textAlign: 'center'
        },
        header: {
            padding: theme.spacing(3, 0)
        },
        body: {

        }
    }),
);
export const Header = ({markdown}) => {
    const classes = useStyles();
    return (
        <Box component={'header'}>
            <Container className={classes.root}>
                <Typography variant={"h1"} component={"h1"} className={classes.header}>
                    <Box component={'span'}>
                        {markdown.frontmatter.title}
                    </Box>
                </Typography>
                <div className={classes.body} dangerouslySetInnerHTML={{__html: markdown.html}} />
            </Container>
        </Box>
    )
}