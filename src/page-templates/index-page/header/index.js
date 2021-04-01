import React from 'react'
import {Box} from "@material-ui/core";
import {useStyles} from "./style";
import Summary from "../summary";


export const HomeHeader = ({showText= false, children}) => {
    const classes = useStyles();
    return (
        <Box component={'header'} className={classes.root}>
            <Summary />
        </Box>
    )
}

export default HomeHeader
