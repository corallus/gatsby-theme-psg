import React from 'react'
import Summary from "../../Summary";
import {Box} from "@material-ui/core";

export const HomeHeader = () => {
    return (
        <Box component={'header'}>
            <Summary />
        </Box>
    )
}