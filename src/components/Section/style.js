import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(6, 0)
        },
        container: {
            '& > *': {
                margin: theme.spacing(5, 0),
            },
        },
        header: {
            textAlign: 'center',
        },
        button: {
            boxShadow: '0 0 8px 2px #02feff, inset 0 0 12px 2px #02feff',
            border: 'solid 2px #02feff',
            backgroundImage: 'linear-gradient(to bottom, #0251d4, #011f8d)'
        }
    }),
);
