import React from 'react'
import {Link} from 'gatsby'
import Heading from './Heading'
import {Button, Container, createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8, 0)
        },
        header: {
            padding: theme.spacing(3, 0)
        },
    }),
);
const Section = ({title, linkName = null, name = null, children, link = null}) => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Container>
                <header className={classes.header}>
                    <Heading title={title}/>
                </header>
                {children}
                {link !== null && linkName !== null &&
                <footer>
                    <Button as={Link} to={link}>
                        {linkName}
                    </Button>
                </footer>
                }
            </Container>
        </section>
    )
}

export default Section