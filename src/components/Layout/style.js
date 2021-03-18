import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    appBarSpacer: theme.mixins.toolbar,
    footer: {
        marginTop: 'auto',
    }
}));
