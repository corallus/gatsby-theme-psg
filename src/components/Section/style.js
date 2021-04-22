import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(6, 0)
        },
        container: {
            '& > *': {
            },
        },
        header: {
            textAlign: 'center',
        },
        content: {
            margin: theme.spacing(4, 0)
        },
        footer: {
        },
    }),
);

export default useStyles