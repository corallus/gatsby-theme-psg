import React, {useContext} from 'react'
import Button from "./Button";
import Context from '../Events/Context'
import {Link} from "gatsby";
import {summaryParams} from "../../params";
import EventContainer from "../Events/Switcher";
import {Box, Container, Typography} from "@material-ui/core";
import {useStyles} from "./style";


const Summary = ({showText=false, children}) => {
    const classes = useStyles();
    const {state} = useContext(Context)
    return (
        <Container component={'summary'} className={classes.root}>
            {children}
            <EventContainer/>
            <Box className={classes.dateLocation}>
                <Typography component={'span'} className={classes.location} {...summaryParams.locationProps}>
                    {state.event.frontmatter.location}
                </Typography>{' '}
                <Typography component={'span'} className={classes.date} {...summaryParams.dateProps}>
                    {state.event.frontmatter.dateMedium}
                </Typography>
            </Box>
            {showText &&
                <div className={classes.body} dangerouslySetInnerHTML={{__html: state.event.html}} />
            }
            {state.event.frontmatter.status === 'In verkoop' ?
                <Button className={classes.button} as={Link} to={"/tickets"}/>
                :
                <Typography className={classes.status}>[{state.event.frontmatter.status}]</Typography>
            }
        </Container>
    )
}

export default Summary
