import React from 'react'
import {Link} from 'gatsby'
import {Box, Container, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import Button from "./Button";

const Section = ({title, linkName = null, name = null, children, link = null}) => {
    const classes = useStyles();
    return (
        <Box component={'section'} className={classes.root}>
            <Container className={classes.container}>
                <header className={classes.header}>
                    <Typography component={'h2'} variant={'h2'}>
                        <Box component={'span'}>
                            {title}
                        </Box>
                    </Typography>
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
        </Box>
    )
}

export default Section