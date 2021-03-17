import React, {useContext} from 'react'
import Context from '../Events/Context';
import {
    Accordion,
    AccordionDetails,
    createStyles,
    Grid,
    makeStyles,
    Typography, withStyles
} from "@material-ui/core";
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Content from "../Content";

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
    },
    content: {
    },
    expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
        },
    }))
export default ({items}) => {
    const classes = useStyles();

    const {state} = useContext(Context)
    const {event} = state
    const posts = items.filter(post => !post.frontmatter.events || (post.frontmatter.events.filter(ev => ev?.id === event.id).length))

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
            <Grid container spacing={3}>
                <Grid item md={6}>
                    {posts.map((item, i) => (
                        i % 2 === 0 &&
                        <Accordion
                            className={classes.root}
                            expanded={expanded === i}
                            onChange={handleChange(i)} key={i}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${i}d-content`}
                                id={`panel${i}d-header`}
                            >
                                <Typography>{item.frontmatter.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Content dangerouslySetInnerHTML={{__html: item.html}} />
                            </AccordionDetails>

                        </Accordion>
                    ))}
                </Grid>
                <Grid item md={6}>
                    {posts.map((item, i) => (
                        i % 2 !== 0 &&
                        <Accordion
                            className={classes.root}
                            expanded={expanded === i}
                            onChange={handleChange(i)} key={i}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${i}d-content`}
                                id={`panel${i}d-header`}
                            >
                                <Typography>{item.frontmatter.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Content dangerouslySetInnerHTML={{__html: item.html}} />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>
            </Grid>
    )
}
