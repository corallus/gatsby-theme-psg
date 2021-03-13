import React from 'react'
import Content from '../../Content'
import Price from './Price'
import showdown from 'showdown'
import {Link} from "gatsby";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    createStyles,
    makeStyles,
    Typography
} from "@material-ui/core";

const converter = new showdown.Converter()

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '100%'
        },
        content: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end'
        }
    }),
);
const Ticket = ({ticket, early_bird}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={ticket.title}
            />
            <CardContent className={classes.content}>
                <Price ticket={ticket} earlyBird={early_bird}/>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Content content={converter.makeHtml(ticket.body)}/>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button as={Link} to={'/tickets'}/>
            </CardActions>
        </Card>
    )
}

export default Ticket
