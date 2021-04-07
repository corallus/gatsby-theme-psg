import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8, 0),
            textAlign: 'center'
        },
        header: {
            padding: theme.spacing(3, 0)
        },
        body: {

        },
        title: {

        }
    }),
);

export default useStyles