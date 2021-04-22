import React from 'react'
import Button from "../../Button"
import {ticketParams} from "../../../params";
import useStyles from "./style";

export default ({...props}) => {
    const classes = useStyles(props);
    return (
        <Button className={classes.root} {...props} {...ticketParams.button.props}>
            {ticketParams.button.text}
        </Button>
    )
}

