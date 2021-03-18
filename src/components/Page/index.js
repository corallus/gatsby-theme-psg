import React from 'react'
import {Header} from "../Headers";
import {Box} from "@material-ui/core";
import {useStyles} from "./style";

export const Page = ({markdown, children}) => {
    const classes = useStyles();
    return (
        <Box component={'article'} className={classes.root}>
            <Header markdown={markdown} />
            <Box className={classes.content}>
                {children}
            </Box>
        </Box>
    )
}
