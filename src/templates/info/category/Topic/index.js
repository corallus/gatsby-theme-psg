import React from 'react';
import {graphql} from 'gatsby'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AccordionDetails, createStyles, makeStyles, Typography, withStyles, Accordion} from "@material-ui/core";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

const AccordionSummary = withStyles({
    root: {
    },
    content: {
    },
    expanded: {

    },
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) =>
    createStyles({
            root: {
                width: '100%',
            },
            content: {
                textAlign: 'left',
                '& a': {
                    color: theme.palette.primary.main
                }
            }
        }
    ))
export default ({item, index, expanded, handleChange}) => {
    const classes = useStyles();
    return (
        <Accordion
            className={classes.root}
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
            >
                <Typography>{item.frontmatter.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.content}>
                <div dangerouslySetInnerHTML={{__html: item.html}} />
            </AccordionDetails>

        </Accordion>
    )
}

export const query = graphql`
    fragment Topic on MarkdownRemark {
        html
        excerpt(pruneLength: 400)
        id
        fields {
            slug
        }
        frontmatter {
            order
            title
            category
            templateKey
            events {
                id
            }
        }
    }
`
