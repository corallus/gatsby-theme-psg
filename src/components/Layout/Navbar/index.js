import React from 'react';
import {Link} from 'gatsby';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MaterialButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import useSiteMetadata from "../../SiteMetadata";
import {Box, Hidden} from "@material-ui/core";
import Logo from "./Logo";
import EventToggler from "./Toggler";
import {Close} from "@material-ui/icons";
import PrimaryMenu from "./Menu";
import SocialMenu from "./SocialMenu";
import Button from "./Button"
import useStyles from './style'

export default function Index() {
    const classes = useStyles();
    const {title} = useSiteMetadata()

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar
                    className={classes.toolbar}
                >
                    <div className={classes.toolbarIcon}>
                        <MaterialButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            startIcon={<MenuIcon fontSize={'large'}/>}
                            size={'large'}
                        >
                            <Hidden smDown implementation="css">
                            menu
                            </Hidden>
                        </MaterialButton>
                        <Hidden smDown implementation="css">
                            <EventToggler/>
                        </Hidden>
                    </div>
                    <div className={classes.title}>
                        <Logo title={title}/>
                    </div>
                    <Box className={classes.secondaryMenu}>
                        <SocialMenu />
                        <Box display={{ xs: 'none', sm: 'none', md: 'inline-block' }}>
                            <Button component={Link} to={'/tickets'} variant="outlined"/>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                open={open}
                onClose={handleDrawerClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.toolbarIcon}>
                    <EventToggler/>
                    <IconButton onClick={handleDrawerClose}>
                        <Close />
                    </IconButton>
                </div>
                <div className={classes.toolbar} />
                <PrimaryMenu handleClose={handleDrawerClose} />
                <Hidden mdUp implementation="css">
                    <SocialMenu />
                </Hidden>
            </Drawer>
        </>
    );
}

