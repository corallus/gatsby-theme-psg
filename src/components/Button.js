import React from 'react'
import {Button} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";

export default ({children, ...props}) => {
    return (
        <Button {...props}>
            {children} <ArrowForward />
        </Button>
    )
}

