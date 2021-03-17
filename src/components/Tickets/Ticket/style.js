import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        content: {
        }
    }),
);
