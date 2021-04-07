import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
            },
    }),
);

export default useStyles
