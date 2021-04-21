import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'relative'
        },
        content: {
            position: 'absolute'
        }
    })
)

export default useStyles
