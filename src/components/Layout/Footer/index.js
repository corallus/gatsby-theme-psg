import React from 'react'
import {Container} from "@material-ui/core";
import useStyles from './style'
import Menu from "./Menu";
import SocialMenu from "../Navbar/SocialMenu";
import Logo from "./Logo";
import Copyright from "./Copyright";

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth={'lg'}>
                <Logo />
                <Menu />
                <SocialMenu />
                <Copyright />
            </Container>
        </div>
    )
}

export default Footer
