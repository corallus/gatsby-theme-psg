import React from 'react'
import useSiteMetadata from '../../SiteMetadata'
import {Container, Link, Typography} from "@material-ui/core";
import {useStyles} from './style'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Copyright />
            </Container>
        </div>
    )
}

function Copyright() {
    const {title} = useSiteMetadata()
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            © Copyright {new Date().getFullYear()}, All Rights Reserved.{' '}
            <Link color="inherit" href="/algemene-voorwaarden.pdf">
            General conditions of {title}
            </Link> apply to this event{' | '}
            <Link color="inherit" href="/privacy-statement.pdf">
                Privacy statement
            </Link>{' '}
        </Typography>
    );
}

export default Footer
