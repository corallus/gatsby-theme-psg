import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    list: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            margin: '0 auto !important',
            maxWidth: 900
        },
    },
    listItem: {
        textAlign: 'center !important',
        width: 'auto !important',
        color: `${theme.palette.primary.main} !important`,
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
        textTransform: 'uppercase'
    }
}));

export default useStyles
