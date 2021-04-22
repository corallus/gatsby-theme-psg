import React from 'react'
import {Button} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import useStyles from './style'

export default ({children, ...props}) => {
    const classes = useStyles();
    return (
        <Button
            endIcon={<ArrowForward/>}
            className={classes.root}
            {...props}
        >
            {children}
        </Button>
    )
}
