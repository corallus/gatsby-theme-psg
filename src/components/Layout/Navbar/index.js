import React, {useContext} from 'react';
import {Link} from 'gatsby';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useSiteMetadata from "../../SiteMetadata";
import Context from "../../Events/Context";
import {Button, Hidden, List, ListItem, ListItemText} from "@material-ui/core";
import Logo from "./Logo";
import EventToggler from "./Toggler";
import {Close, Facebook, Instagram} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between'
    },
    toolbarSide: {
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    drawerPaper: {
        backgroundColor: '#000',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),
    },
}));

export default function Index() {
    const classes = useStyles();
    const {title, social} = useSiteMetadata()

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar  position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar
                    className={classes.toolbar}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Hidden smDown implementation="css">
                            <EventToggler/>
                        </Hidden>
                    </div>
                    <div className={classes.title}>
                        <Logo title={title}/>
                    </div>
                    <Hidden smDown implementation="css">
                        {social.facebook &&
                        <IconButton aria-label="facebook" color="inherit">
                            <Facebook />
                        </IconButton>
                        }
                        {social.instagram &&
                        <IconButton aria-label="facebook" color="inherit">
                            <Instagram />
                        </IconButton>
                        }
                        <Button href="#" color="inherit" variant="outlined">
                            Tickets
                        </Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <nav>
                <Hidden smUp implementation="css">
                    <Drawer
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
                        <List>
                            <PrimaryMenu/>
                            <ListItem button>
                                <Link
                                    to={"/tickets"}
                                >
                                    Tickets
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <IconButton
                                    as={"a"}
                                    href={social.instagram} rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Facebook />
                                </IconButton>
                                {social.instagram &&
                                <IconButton
                                    as={"a"}
                                    href={social.instagram}
                                    rel="noopener noreferrer"

                                    target="_blank"
                                >
                                    <Instagram />
                                </IconButton>
                                }
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="temporary"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <PrimaryMenu />
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
}

export const PrimaryMenu = () => {
    const {menuItems} = useSiteMetadata()
    const {state} = useContext(Context)
    const {event} = state
    return (
        <List>
            {menuItems.map((item, i) => (
                item.external ?
                    <ListItem
                        button
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={i}
                    >
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItem>
                    :
                    <ListItem
                        button
                        component={Link}
                        to={item.link}
                        key={i}
                    >
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItem>
            ))}
            {event.frontmatter.links && event.frontmatter.links.map((item, i) => (
                <ListItem
                    button
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={i}
                >
                    <ListItemText>
                        {item.name}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}
