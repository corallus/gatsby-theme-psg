import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    secondaryMenu: {

    },
    drawer: {

    }
}));

export default useStyles;
