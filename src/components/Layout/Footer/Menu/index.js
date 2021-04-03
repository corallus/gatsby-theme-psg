import {useStyles} from "./style";
import PrimaryMenu from "../../Navbar/Menu";
import React from "react";

const Menu = () => {
    const classes = useStyles();
    return (
        <PrimaryMenu classes={classes} />
    )
}

export default Menu
