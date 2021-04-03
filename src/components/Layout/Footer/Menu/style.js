import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    list: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            margin: '0 auto',
            maxWidth: 900
        },
    },
    listItem: {
        textAlign: 'center',
        color: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            '&::after': {
                position: 'absolute',
                right: 0,
                transform: 'translateX(50%)',
                content: '" \\2022"',
            },
            '&:last-child': {
                '&::after': {
                    content: '""'
                }
            }
        }
    },
    listItemText: {

    }
}));
