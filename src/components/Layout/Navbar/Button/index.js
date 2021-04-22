import React from 'react'
import Button from '../../../Button'
import {navbarParams} from "../../../../params";
import useStyles from './style'

export default ({...props}) => {
    const classes = useStyles();
    return (
        <Button className={classes.root} {...props} {...navbarParams.ticketButton.props}>
            {navbarParams.ticketButton.text}
        </Button>
    )
}