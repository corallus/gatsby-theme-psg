import React from 'react'
import Button from '../../Button'
import {sectionParams} from "../../../params";
import useStyles from "./style";

export default ({children, ...props}) => {
    const classes = useStyles(props);
    return (
        <Button className={classes.root} {...props} {...sectionParams.buttonProps}>
            {children}
        </Button>
    )
}