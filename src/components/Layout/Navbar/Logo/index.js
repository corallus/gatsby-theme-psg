import React from 'react'
import useStyles from "./style";

const Logo = () => {
    const classes = useStyles();
    return <img src={'../../../img/logo.svg'} alt={'logo'} className={classes.root} />;
}

export default Logo
