import React from 'react'
import Price from './Price'
import showdown from 'showdown'
import {Link} from "gatsby";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
} from "@material-ui/core";
import {useStyles} from "./style";
import Button from "./Button";

const converter = new showdown.Converter()

const Ticket = ({ticket, early_bird}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className={classes.header} title={ticket.title} />
            <CardContent className={classes.content}>
                <Price ticket={ticket} earlyBird={early_bird}/>
                <div dangerouslySetInnerHTML={{__html: converter.makeHtml(ticket.body)}} />
            </CardContent>
            <CardActions className={classes.footer}>
                <Button className={classes.button} component={Link} to={'/tickets'}/>
            </CardActions>
        </Card>
    )
}

export default Ticket
