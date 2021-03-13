import React from 'react'
import {Typography} from "@material-ui/core";

export default ({title}) => {
    return (
        <Typography component={'h2'} variant={'h2'}>
            {title}
        </Typography>
    )
}