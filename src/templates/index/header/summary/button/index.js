import React from 'react'
import Button from '../../../../../components/Button'
import {summaryParams} from "../../../../../params";
import useStyles from './style'

export default ({children, ...props}) => {
    const classes = useStyles()
    return (
        <Button className={classes.root} {...props} {...summaryParams.ticketButton.props}>
            {summaryParams.ticketButton.text}
        </Button>
    )
}

