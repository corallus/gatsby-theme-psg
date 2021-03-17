import React, {useContext} from 'react'
import Content from "../../Content";
import Button from "./Button";
import Context from '../Context'
import {Link} from "gatsby";
import {summaryParams} from "../../../params";
import EventContainer from "gatsby-theme-psg/src/components/Events/Switcher";
import {Container, createStyles, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8, 0),
            textAlign: 'center'
        },
        header: {
            padding: theme.spacing(3, 0)
        },
    }),
);
const Summary = () => {
    const classes = useStyles();
    const {state} = useContext(Context)
    return (
        <Container className={classes.root}>
            {state.events.length > 1 &&
            <EventContainer/>
            }
            <div className="event">
                <div className={"my-2 location"}>
                        <span {...summaryParams.locationProps}>
                            {state.event.frontmatter.location}
                        </span>
                </div>
                {state.events.length < 2 &&
                <div className={"my-4 date"}>
                        <span {...summaryParams.dateProps}>
                        {state.event.frontmatter.dateLong}
                        </span>
                </div>
                }
                <Content content={state.event.html} />
                {state.event.frontmatter.status === 'In verkoop' ?
                    <Button as={Link} to={"/tickets"}/>
                    :
                    <span className="text-danger status h2">[{state.event.frontmatter.status}]</span>
                }
            </div>
        </Container>
    )
}

export default Summary
