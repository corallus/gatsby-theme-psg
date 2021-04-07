import React from 'react'
import {Box} from "@material-ui/core";
import useStyles from "./style";
import Summary from "./summary";

const HomeHeader = () => {
    const classes = useStyles();
    return (
        <Box component={'header'} className={classes.root}>
            <Summary showText={showText} />
        </Box>
    )
}

export default HomeHeader
