import React from 'react'
import {Link} from 'gatsby'
import {Box, Container, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import Button from "./Button";

const Section = ({title, children, linkName = null, name = null, link = null, ...props}) => {
    const classes = useStyles(props);
    return (
        <Box component={'section'} className={classes.root}>
            <Container className={classes.container}>
                {title &&
                <header className={classes.header}>
                    <Typography component={'h2'} variant={'h2'}>
                        <Box component={'span'}>
                            {title}
                        </Box>
                    </Typography>
                </header>
                }
                {children}
                {link !== null && linkName !== null &&
                <footer>
                    <Button className={classes.button} component={Link} to={link}>
                        {linkName}
                    </Button>
                </footer>
                }
            </Container>
        </Box>
    )
}

export default Section