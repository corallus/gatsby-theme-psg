import React from 'react'
import useSiteMetadata from '../../../SiteMetadata'
import {Link, Typography} from "@material-ui/core";


const Copyright = () => {
    const {title} = useSiteMetadata()
    return (
        <Typography variant="body2" color="textSecondary">
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

export default Copyright
