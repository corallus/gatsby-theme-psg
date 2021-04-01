import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
            },
    }),
);
